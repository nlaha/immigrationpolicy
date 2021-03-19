/* eslint-disable import/no-webpack-loader-syntax */
import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Mapbox
import ReactMapboxGl, { Layer, Feature, MapContext } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxChoropleth = require("mapbox-choropleth");

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
});

const OriginMap = () => {
  return (
    <div className="map-container">
      <Map
        style="mapbox://styles/nlaha/ckmfnhk2d4pyt17odnstmswld"
        containerStyle={{
          minHeight: "50vh",
        }}
        center={[0, 45]}
        zoom={[1]}
      >
        <MapContext.Consumer>
          {(map) => {
            new MapboxChoropleth({
              tableUrl:
                "https://github.com/nlaha/immigration-policy/raw/master/data/ImmigrationAllTypes2019.csv",
              tableNumericField: "Number",
              tableIdField: "Country",
              geometryUrl: "mapbox://mapbox.country-boundaries-v1",
              geometryIdField: "name",
            }).addTo(map);
          }}
        </MapContext.Consumer>
      </Map>
    </div>
  );
};

export default OriginMap;
