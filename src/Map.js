import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from './util';

const Map = ({ countries, casesType, center, zoom }) => {
  const ChangeView = ({ center, zoom }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  return (
    <div className="map_box">
      <MapContainer className="map" center={center} zoom={zoom}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
};

export default Map;
