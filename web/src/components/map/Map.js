import React, { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Providers } from "./Providers";
import L from "leaflet";

const Maps = ({ width, height, restaurantInfo }) => {
  //?---------------------Koordinations----------------------

  const center = useMemo(
    () => ({
      lat: restaurantInfo.latitude,
      lng: restaurantInfo.longitude,
    }),
    [restaurantInfo.latitude, restaurantInfo.longitude]
  );

  const markerIcon = new L.icon({
    iconUrl: require("../../assets/images/mapMarker.png"),
    iconSize: [55, 45],
  });

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

        <Marker
          position={[restaurantInfo.latitude, restaurantInfo.longitude]}
          icon={markerIcon}
        >
          <Popup>
            <p>Restaurant Koordinate</p>
          </Popup>
        </Marker>
      </MapContainer>
    </React.Fragment>
  );
};

export default Maps;
