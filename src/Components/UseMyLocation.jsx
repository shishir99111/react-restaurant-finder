import React, { Component } from 'react'

export class UseMyLocation extends Component {

    constructor(props){
        super(props);
        this.showLocation = this.showLocation.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

    showLocation(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        this.props.onChange(latitude, longitude);
     }

    errorHandler(err){
        if(err.code === 1) {
           alert("Error: Access is denied!");
        } else if( err.code === 2) {
           alert("Error: Position is unavailable!");
        }
     }
        
    getLocation(){
        if(navigator.geolocation) {
           // timeout at 60000 milliseconds (60 seconds)
           const options = {timeout:60000};
           navigator.geolocation.getCurrentPosition(this.showLocation, this.errorHandler, options);
        } else {
           alert("Sorry, browser does not support geolocation!");
        }
     }

    render(){
        return (
            <input type="button" className="float-location-button float-location-button-center location-btn color-white" onClick={this.getLocation} value="USE MY LOCATION"/>
        )
    }
}

export default UseMyLocation