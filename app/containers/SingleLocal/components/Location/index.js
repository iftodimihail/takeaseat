import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

/**
 * MapContainer Component
 */
export class MapContainer extends React.Component {
  state = {
    selectedPlace: {
      name: 'Iasi'
    }
  };

  render() {
    return (
      <div style={{ height: 400, width: 400 }}>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 47.151726,
            lng: 27.587914
          }}
        >

          <Marker
            onClick={this.onMarkerClick}
            name={'Current location'}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
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
