import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  heightL: '100%'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
      google={this.props.google}
      zoom={17}
      style={mapStyles}
      initialCenter = {{
        lat: 39.6417034,
        lng: -84.2889354
      }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCcQ4sUMPkgiYOBLeFoEyPZ7kMyT53K2C4'
})(MapContainer);
