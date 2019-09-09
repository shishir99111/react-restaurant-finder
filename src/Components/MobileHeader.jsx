
import React from 'react'
import UseMyLocation from './UseMyLocation'

const MobileHeader = (props) => {
    return (
        <header className="col-lg-4 col-12 hide-header header-top-padding color-blue">
            <div>
                <input type="search" placeholder="Search your area" className="search-input header_search"></input>
                {/* For Auto complete Search Box */}
                {/* <Autocomplete
                    className="search-input header_search"
                    placeholder={ this.state.address || 'Search Area' } className="search-input search-input-center map_search"
                    onPlaceSelected={ this.onPlaceSelected }
                    types={['(regions)']}
                /> */}
            </div>
            <div className="row padding-10 flex-center color-white">
                <div className="col-6">
                    {/* <button className="location-btn color-white">USE MY LOCATION</button> */}
                    <UseMyLocation onChange={(lat, lng) => props.onChange(lat, lng)} />
                </div>
                <div className="col-6">
                    <b>Show on Map</b>
                </div>
            </div>
        </header>
    )
}

export default MobileHeader