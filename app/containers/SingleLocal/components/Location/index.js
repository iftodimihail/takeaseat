import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

/**
 * MapContainer Component
 */
export class MapContainer extends React.Component {
  render() {
  console.log(this.props);
    return (
      <div style={{ height: 400, width: 400 }}>
        <Map
          google={this.props.google}
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

          <InfoWindow onClose={this.onInfoWindowClose}>
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
