import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  heightL: '100%'
}
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    places: [
      {name:"Watermark", loc: {lat: 39.6410671, lng: -84.2873409}},
      {name:"Bullwinkle's Top Hat Bistro", loc: {lat: 39.6426776, lng: -84.2889981}},
    ]
  }

  onMarkerClick = (props, marker, e) => 
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter = {{lat: 39.6417034,lng: -84.2889354}}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Miamisburg, Ohio'}
        />

        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
          <div>
           <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

        {this.state.places.map((place)=>(
           <Marker
           onClick={this.onMarkerClick}
           name={place.name}
           position={place.loc}
           />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCcQ4sUMPkgiYOBLeFoEyPZ7kMyT53K2C4'
})(MapContainer);

//https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react