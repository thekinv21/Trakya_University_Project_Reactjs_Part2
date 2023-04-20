import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Providers } from "./Providers";

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
          attribution={Providers.maptiler.attribution}
          url={Providers.maptiler.url}
        />
      </MapContainer>
    </React.Fragment>
  );
};

export default React.memo(Maps);
