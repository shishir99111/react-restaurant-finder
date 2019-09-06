import React, { Component } from 'react'
/* eslint-disable import/first */
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import UseMyLocation from './UseMyLocation';
import { get_google_map_url } from '../Utils/index';

class MapBox extends Component{
    constructor( props ){
        super( props );
        this.state = {
            address: '',
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            }
        }
    }

    /**
     * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
     *
     * @param nextProps
     * @param nextState
     * @return {boolean}
     */
    shouldComponentUpdate = ( nextProps, nextState )=>{
        if (
        this.state.mapPosition.lat !== this.props.center.lat ||
        this.state.address !== nextState.address || (this.props.businesses.length !== nextProps.businesses.length)
        ) {
            return true
        } else if ( this.props.center.lat === nextProps.center.lat ){
            return false
        }
    }

    use_my_location = (lat, lng) => {
        const place = {
            formatted_address: '',
            geometry: {
                location: { lat: ()=>lat, lng: ()=>lng }
            }
        }
        this.onPlaceSelected(place);
    }

    /**
     * When the user types an address in the search box
     * @param place
     */
    onPlaceSelected = (place) => {
        const address = place.formatted_address,
        // addressArray =  place.address_components,
        latValue = place.geometry.location.lat(),
        lngValue = place.geometry.location.lng();

        // Set these values in the state.
        this.setState({
            address: ( address ) ? address : '',
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
        this.props.onChange({
            lat: latValue,
            lng: lngValue
        })    // parent update
    };
    

    render(){
        const defaultMapOptions = {
			mapTypeControl: false,
			scaleControl: false,
            fullscreenControl: false,
            streetViewControl: false
		};
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap google={this.props.google}
                        defaultZoom={this.props.zoom}
                        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                        defaultOptions={defaultMapOptions}
                        >

                        
                        <MarkerClusterer
                            averageCenter
                            enableRetinaIcons
                            gridSize={60}
                            >
                            {
                                this.props.businesses.map((b, i)=>
                                    <Marker google={this.props.google}
                                        onClick={()=> window.location = b.url}
                                        key={b.id}
                                        name={b.name}
                                        draggable={false}
                                        position={{ lat: b.coordinates.latitude, lng: b.coordinates.longitude }}
                                    />
                                )
                            }   
                        </MarkerClusterer>
                            
                        <UseMyLocation onChange={this.use_my_location}/>
                        {/* For Auto complete Search Box */}
                        <Autocomplete
                            placeholder={ this.state.address || 'Search Area' } className="search-input search-input-center map_search"
                            onPlaceSelected={ this.onPlaceSelected }
                            types={['(regions)']}
                        />
                    </GoogleMap>
                )
            )
        );

        let map;
        if( this.props.center.lat !== undefined ) {
            map = <div>
                    <AsyncMap
                        googleMapURL={get_google_map_url()}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: this.props.height }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
        } else {
            map = <div style={{height: this.props.height}} />
        }
        return( map )
    }
}

export default MapBox