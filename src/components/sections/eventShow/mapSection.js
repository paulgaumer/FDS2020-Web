import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { hasWindow } from '../../../utils/hasWindow';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const MapSection = ({ address, mapGps }) => {
  // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null);

  useEffect(() => {
    // if there is no window, we cannot render this component
    if (hasWindow) {
      let mapCenter = [mapGps.lng, mapGps.lat];
      let mapZoom = 15;

      // Token must be set before constructing map
      mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API_KEY;

      const map = new mapboxgl.Map({
        container: mapNode.current,
        style: `mapbox://styles/mapbox/outdoors-v11`,
        center: mapCenter,
        zoom: mapZoom,
      });

      new mapboxgl.Marker({ color: '#FDBF37', scale: 2 })
        .setLngLat([mapGps.lng, mapGps.lat])
        .addTo(map);

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }
  }, []);

  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <div className="max-w-5xl mx-auto overflow-hidden bg-white border-t-4 rounded-b-lg shadow border-primary">
          <p className="flex items-center justify-center py-6 space-x-2">
            <span className="text-2xl text-primary">
              <FaMapMarkerAlt />
            </span>
            <span className="pt-1 font-bold text-gray-500">{address}</span>
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
