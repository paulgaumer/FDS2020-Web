import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { hasWindow } from '../../../utils/hasWindow';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';

const featuredLabel = `
<p class="flex items-center justify-center px-2 py-1 space-x-1 text-white bg-featured rounded-b">
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="none" class="w-3 h-3">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  </span>
  <span>Coup de coeur</span>
</p>`;

const EventsMap = ({ selectedEvents, department }) => {
  // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null);
  const mapboxToken = process.env.GATSBY_MAPBOX_API_KEY;
  const [mapInstance, setMapInstance] = useState();
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [allMarkers, setAllMarkers] = useState([]);

  const dep = formatDepartmentName(department);

  const clearMarkers = (markers) => {
    markers.map((m) => m.remove());
  };

  // Check if window is loaded
  useEffect(() => {
    if (hasWindow) {
      setWindowLoaded(true);
    }
  }, []);

  // Init map instance when window is loaded
  useEffect(() => {
    if (windowLoaded && !mapInstance) {
      // let mapCenter = [allCenter.lng, allCenter.lat];
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

      setMapInstance(map);
    }
  }, [windowLoaded]);

  // Display markers based on the current state of selected events
  useEffect(() => {
    if (mapInstance) {
      clearMarkers(allMarkers);
      let markers = [];
      if (selectedEvents.length > 0) {
        selectedEvents.map((e) => {
          const popupContent = `
          <a href="/${dep}/${e.slug.current}">
            <div class="w-40 md:w-52">
              <img src=${e.image.asset.fluid.src} 
              class="w-full h-20 object-cover rounded-t" 
              style="object-position: ${
                e.image.hotspot !== null
                  ? `${e.image.hotspot.x * 100}% ${e.image.hotspot.y * 100}%`
                  : 'center'
              }"/>
              <p class="text-base text-center p-3 text-gray-700">${e.title}</p>
              ${e.featured ? featuredLabel : ''}
              
            </div>
          </a>`;

          const popup = new mapboxgl.Popup({ closeButton: false }).setHTML(
            popupContent
          );

          const m = new mapboxgl.Marker({
            color: '#FDBF37',
            scale: 1,
          })
            .setLngLat([e.map.lng, e.map.lat])
            .setPopup(popup)
            .addTo(mapInstance);
          markers.push(m);
          return markers;
        });

        setAllMarkers(markers);
        // Update map center & zoom level based on new markers
        const bounds = new mapboxgl.LngLatBounds();
        markers.map((m) => {
          const coord = m.getLngLat();
          return bounds.extend(coord);
        });
        mapInstance.fitBounds(bounds, { padding: 80, maxZoom: 16 });
      }
    }
  }, [selectedEvents, mapInstance]);

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
