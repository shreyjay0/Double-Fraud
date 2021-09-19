/*global google*/
import React from "react";
import ReactDOM from "react-dom";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import LocalHelp from "./LocateHelp";

const google = (window.google = window.google ? window.google : {});
const mapStyles = {
  map: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};

class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);
    const { lat, lng } = this.props.defCenter;

    this.state = {
      lat: lat,
      lng: lng,
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.currentLocation !== { lat: this.state.lat, lng: this.state.lng }
    ) {
      this.recenterMap();
    }
  };

  recenterMap = () => {
    const map = this.map;
    const google = window.google;
    const maps = google.maps;

    if (map) {
      map.panTo(new maps.LatLng(this.state.lat, this.state.lng));
    }
  };

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  render() {
    return <LocalHelp lat={this.state.lat} lng={this.state.lng} />;
  }
}

CurrentLocation.defaultProps = {
  defCenter: {
    lat: -34.397,
    lng: 150.644,
  },
  zoom: 14,
  visible: false,
  centerAroundCurrentLocation: false,
};

export default CurrentLocation;
