import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { hasWindow } from '../../../utils/hasWindow';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';
import markerIcon from '../../../images/marker.png';

// Content for Marker Popup
const featuredLabel = `
<p class="flex items-center justify-center px-2 py-1 space-x-1 text-white bg-featured rounded-b">
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="none" class="w-3 h-3">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  </span>
  <span>Coup de coeur</span>
</p>`;

// Content for Marker Popup
const createPopupContent = (item, dep) => {
  const content = `
          <a href="/${dep}/${item.slug}">
            <div class="w-40 md:w-52">
              <img src=${item.image}
              class="w-full h-20 object-cover rounded-t"
              style="object-position: ${
                item.hotspotX !== null ? item.hotspotX * 100 + '%' : 'center'
              } ${
    item.hotspotY !== null ? item.hotspotY * 100 + '%' : 'center'
  }"/>
              <p class="text-base text-center p-3 text-gray-700">${
                item.title
              }</p>
              ${item.featured ? featuredLabel : ''}
            </div>
          </a>`;
  return content;
};

// Converts the array of events to a GEOJSON object, with properties
const convToGeoJson = (arr) => {
  if (arr.length > 0) {
    const geo = arr.map((e) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [e.map.lng, e.map.lat],
      },
      properties: {
        id: e.id,
        title: e.title,
        image: e.image.asset.fluid.src,
        hotspotX: e.image.hotspot !== null ? e.image.hotspot.x : null,
        hotspotY: e.image.hotspot !== null ? e.image.hotspot.y : null,
        slug: e.slug.current,
      },
    }));

    return {
      type: 'FeatureCollection',
      features: geo,
    };
  }
};

// Updates the zoom level and map bounds to be able to see all markers at once
const defineMapBounds = (geoJson, map) => {
  if (geoJson && geoJson.features.length > 0) {
    let bounds = geoJson.features.reduce(function (bounds, feature) {
      if (!Array.isArray(feature.geometry.coordinates[0])) {
        // point feature
        return bounds.extend(feature.geometry.coordinates);
      } else {
        return feature.geometry.coordinates.reduce(function (bounds, coord) {
          return bounds.extend(coord);
        }, bounds);
      }
    }, new mapboxgl.LngLatBounds());

    map.fitBounds(bounds, {
      maxZoom: 16,
      padding: 80, // in px, to make markers on the top edge visible
    });
  }
};

// MAIN COMPONENT
const EventsMap = ({ selectedEvents, department = '' }) => {
  const dep = formatDepartmentName(department);

  // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null);
  const mapboxToken = process.env.GATSBY_MAPBOX_API_KEY;
  const [mapInstance, setMapInstance] = useState();
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [geoData, setGeoData] = useState(convToGeoJson(selectedEvents));

  // Check if window is loaded
  useEffect(() => {
    if (hasWindow) {
      setWindowLoaded(true);
    }
  }, []);

  // Updates the geoJson object after event filtering
  useEffect(() => {
    if (mapInstance) {
      if (selectedEvents.length > 0) {
        const geo = convToGeoJson(selectedEvents);
        setGeoData(geo);
      } else {
        setGeoData({
          type: 'FeatureCollection',
          features: [],
        });
      }
    }
  }, [selectedEvents]);

  // Updates the markers after changes to the geoJson object
  useEffect(() => {
    if (mapInstance) {
      if (mapInstance.getSource('fdsevents') !== undefined) {
        mapInstance.getSource('fdsevents').setData(geoData);
      }
    }
  }, [geoData]);

  // Updates the zoom level and map bounds after changes to the geoJson object
  useEffect(() => {
    if (mapInstance) {
      defineMapBounds(geoData, mapInstance);
    }
  }, [geoData]);

  // Init map instance when window is loaded with markers layers
  useEffect(() => {
    if (windowLoaded && !mapInstance) {
      let mapCenter = [-0.07553, 47.69815];
      let mapZoom = selectedEvents > 0 ? 8 : 7;

      // Token must be set before constructing mapmap.
      mapboxgl.accessToken = mapboxToken;

      const map = new mapboxgl.Map({
        container: mapNode.current,
        style: `mapbox://styles/mapbox/outdoors-v11`,
        center: mapCenter,
        zoom: mapZoom,
      });
      map.addControl(
        new mapboxgl.NavigationControl({ showCompass: false }),
        'top-right'
      );

      // Save map instance in state for later use in useEffect
      setMapInstance(map);

      // Apply various actions on map load
      map.on('load', function () {
        map.loadImage(markerIcon, function (error, image) {
          if (error) throw error;
          map.addImage('markerIcon', image);
          // Add the geojson as data source for the clusters
          map.addSource('fdsevents', {
            type: 'geojson',
            data: geoData,
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
          });

          // Layer for the colored clusters
          map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'fdsevents',
            filter: ['has', 'point_count'],
            paint: {
              'circle-color': '#FDBF37',
              'circle-radius': 30,
              'circle-stroke-color': '#fff',
              'circle-stroke-width': 4,
            },
          });

          // Layer for the clusters numbers
          map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'fdsevents',
            filter: ['has', 'point_count'],
            layout: {
              'text-field': '{point_count_abbreviated}',
              'text-font': ['Arial Unicode MS Bold'],
              'text-size': 15,
              'text-allow-overlap': true,
            },
          });

          // Layer for single markers
          map.addLayer({
            id: 'unclustered-point',
            type: 'symbol',
            source: 'fdsevents',
            filter: ['!', ['has', 'point_count']],
            layout: {
              'icon-image': 'markerIcon',
              'icon-size': 0.35,
            },
          });
        });

        map.on('click', 'unclustered-point', function (e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          // Creates markers popups
          const popupContent = createPopupContent(
            e.features[0].properties,
            dep
          );
          new mapboxgl.Popup({
            closeButton: false,
          })
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
        });

        // Update map center & zoom level based on new markers
        defineMapBounds(geoData, map);
      });
    }
  }, [windowLoaded]);

  return (
    <div>
      <div className="" style={{ height: '400px' }}>
        <div
          ref={mapNode}
          className="rounded-md shadow"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default EventsMap;
