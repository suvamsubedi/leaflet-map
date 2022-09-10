import React, { Component } from "react";
import "./App.css";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import leafGreen from "./assets/leaf-green.png";
import leafRed from "./assets/leaf-red.png";
import leafOrange from "./assets/leaf-orange.png";

class App extends Component {
  state = {
    greenIcon: {
      lat: 28.3949,
      lng: 84.124,
    },
    redIcon: {
      lat: 28.384,
      lng: 83.225,
    },
    orangeIcon: {
      lat: 28.3947,
      lng: 82.332,
    },
    zoom: 7,
  };

  grenIcon = L.icon({
    iconUrl: leafGreen,

    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  redIcon = L.icon({
    iconUrl: leafRed,

    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -86],
  });

  orangeIcon = L.icon({
    iconUrl: leafOrange,

    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -86],
  });

  render() {
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionGreenIcon = [
      this.state.greenIcon.lat,
      this.state.greenIcon.lng,
    ];
    const positionOrangeIcon = [
      this.state.orangeIcon.lat,
      this.state.orangeIcon.lng,
    ];
    return (
      <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}.png"
        />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreenIcon} icon={this.grenIcon}>
          <Popup>provinence Layer</Popup>
        </Marker>
        <Marker position={positionRedIcon} icon={this.redIcon}>
          <Popup>District Layer</Popup>
        </Marker>
        <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
          <Popup>Municipality Layer</Popup>
        </Marker>
      </Map>
    );
  }
}

export default App;
