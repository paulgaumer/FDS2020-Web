import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { hasWindow } from '../../../utils/hasWindow';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const MapSection = ({ mapGps }) => {
  // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null);
  const mapboxToken = process.env.GATSBY_MAPBOX_API_KEY;

  useEffect(() => {
    // if there is no window, we cannot render this component
    if (hasWindow) {
      let mapCenter = [mapGps.lng, mapGps.lat];
      let mapZoom = 15;

      // Token must be set before constructing map
      mapboxgl.accessToken = mapboxToken;

      const map = new mapboxgl.Map({
        container: mapNode.current,
        style: `mapbox://styles/mapbox/outdoors-v11`,
        center: mapCenter,
        zoom: mapZoom,
      });

      new mapboxgl.Marker({ color: '#FDBF37', scale: 2 })
        .setLngLat([mapGps.lng, mapGps.lat])
        .addTo(map);

      map.addControl(
        new mapboxgl.NavigationControl({ showCompass: false }),
        'top-right'
      );
    }
  }, [mapGps.lng, mapGps.lat, mapboxToken]);

  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <div
          className="max-w-5xl mx-auto overflow-hidden bg-white border-t-4 rounded-b-lg shadow border-primary"
          id="#eventMap"
        >
          <p className="flex items-center justify-center px-4 py-6 space-x-2">
            <span className="text-2xl text-primary">
              <FaMapMarkerAlt />
            </span>
            <span className="pt-1 font-bold text-gray-500">
              {mapGps.address}
            </span>
          </p>
          <div className="" style={{ height: '400px' }}>
            <div ref={mapNode} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default MapSection;
