import React from "react";
import { GoogleMap, useJsApiLoader, Rectangle } from "@react-google-maps/api";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "800px",
  height: "600px",
};

const center = {
  lat: 43.70,
  lng: -79.42,
};

const regions = {
    north: 44.7925, // North of Toronto (Blue Mountain)
    south: 43.5814, // South of Toronto
    east: -78.9395, // East to Uxbridge
    west: -79.7624, // West to Brampton
  }

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Add Rectangles for Regions */}
      {regions.map((region, index) => (
        <Rectangle
          key={index}
          bounds={region.bounds}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
          }}
        />
      ))}

      {/* Child components, such as additional rectangles, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyMap);
