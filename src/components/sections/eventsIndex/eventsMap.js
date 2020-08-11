import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { hasWindow } from '../../../utils/hasWindow';
import { getLatLngCenter } from '../../../utils/getMapCenter';

const getCenter = (events) => {
  const allCoordinates = events.map((e) => {
    return { lat: e.map.lat, lng: e.map.lng };
  });
  return getLatLngCenter(allCoordinates);
};

const EventsMap = ({ selectedEvents }) => {
  // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null);
  const mapboxToken = process.env.GATSBY_MAPBOX_API_KEY;
  const [mapInstance, setMapInstance] = useState();
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [allMarkers, setAllMarkers] = useState([]);
  const [allCenter] = useState(getCenter(selectedEvents));

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
      let mapCenter = [allCenter.lng, allCenter.lat];
      let mapZoom = 8;

      // Token must be set before constructing mapmap.
      mapboxgl.accessToken = mapboxToken;

      const map = new mapboxgl.Map({
        container: mapNode.current,
        style: `mapbox://styles/mapbox/outdoors-v11`,
        center: mapCenter,
        zoom: mapZoom,
      });
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

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
          const m = new mapboxgl.Marker({
            color: '#FDBF37',
            scale: 1,
          })
            .setLngLat([e.map.lng, e.map.lat])
            .addTo(mapInstance);
          markers.push(m);
          return markers;
        });
        setAllMarkers(markers);

        // Update map center & zoom level based on new markers
        const bounds = new mapboxgl.LngLatBounds();
        markers.map((m) => {
          const coord = m.getLngLat();
          bounds.extend(coord);
        });
        mapInstance.fitBounds(bounds, { padding: 80 });
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
