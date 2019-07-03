import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

/**
 * MapContainer Component
 */
export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {}
  };

  onMarkerClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.props.name},${this.props.city}`);
  };

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div style={{ height: 400, width: 400 }}>
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={14}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
        >

          <Marker
            onClick={this.onMarkerClick}
            name={'Current location'}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.props.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeCL8ID8s38u0IN6ZtCkpZCRX_39GQzSI'
})(MapContainer);
