import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = ({ width, height, restaurantInfo }) => {
  
  //?---------------------Koordinations----------------------

  const center = {
    lat: restaurantInfo.latitude,
    lng: restaurantInfo.longitude,
  };

  return (
    <React.Fragment>
      <MapContainer
        center={center}
        zoom={10}
        style={{ width: width, height: height, borderRadius: "5px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://api.maptiler.com/maps/376c0d49-b717-4cd6-bf62-1fd368d4afc0/?key=iT6hYkKkzhr0vZHZXT1k#1.5/29.91332/-34.41555"/>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </React.Fragment>
  );
};

export default Maps;
