import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import ListItem from './Components/ListItem'
import MapBox from './Components/MapBox'
import MobileHeader from './Components/MobileHeader';
import { SAMPLE_SEARCH_RESPONSE, DEFAULT_ADDRESS } from './Fixtures'
import { SEARCH_API_ENABLED, YELP_API_KEY } from './Config'

class App extends Component {

  constructor() {
    super();

    this.state = {
      address: DEFAULT_ADDRESS,  // default_address
      businesses: []
    }
    this.get_restro_list = this.get_restro_list.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async get_restro_list(){
    if(SEARCH_API_ENABLED){
      try{
        const option = {
          headers: { 'Authorization': `Bearer ${YELP_API_KEY}`}, 
          mode: 'no-cors',
          method: 'GET',
        };
        const req_url = `https://api.yelp.com/v3/businesses/search?latitude=${this.state.address.lat}&longitude=${this.state.address.lng}`;
        
        const res = await fetch(req_url, option)
        const data = await res.json();
        await this.setState({ businesses: data.businesses })
      }catch(e){
        console.log(e);
      }
    } else {
      // dummy API response to avoid unnecessary calls to API
      this.setState({ businesses: SAMPLE_SEARCH_RESPONSE.businesses })
    }
  }

  async updateAddress(adr){
    await this.setState({ address: adr })
    await this.get_restro_list();
  }

  async componentDidMount(){
    await this.get_restro_list()
  }

  render() {
    const { google } = this.props;
    const { businesses, address } = this.state;

    return (
      <Fragment>
        <MobileHeader></MobileHeader>
        <div className="container-fluid">
          <div className="row page-row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 list-view list-view-box scroll-temp">
              {
                businesses.map((b)=>
                  <ListItem info={b} key={b.id}></ListItem>
                )
              }
            </div>
            <div className="col-lg-8 col-md-8 hide-map map-container padding-0">
              <MapBox
                onChange={this.updateAddress}
                google={google}
                center={address}
                businesses={businesses}
                height='665px'
                zoom={15}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
