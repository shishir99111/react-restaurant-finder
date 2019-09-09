import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import ListItem from './Components/ListItem'
import MapBox from './Components/MapBox'
import MobileHeader from './Components/MobileHeader';
import { SAMPLE_SEARCH_RESPONSE, DEFAULT_ADDRESS } from './Fixtures'
import { SEARCH_API_ENABLED, YELP_SERVER } from './Config'
import axios from 'axios';

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
    // In case SEARCH_API_ENABLED is disabled, dummy API response to avoid unnecessary calls to API
    if(SEARCH_API_ENABLED){
      try{
        const req_url = `${YELP_SERVER}/restro?latitude=${this.state.address.lat}&longitude=${this.state.address.lng}`;
        const option = {
          method: 'GET',
          url: req_url
        };
        
        const res = await axios(option)
        await this.setState({ businesses: res.data.businesses })
      }catch(e){
        console.log(e);
      }
    } else {
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
        <MobileHeader onChange={ async(lat, lng) => await this.setState({ address: {lat, lng} }) }></MobileHeader>
        <div className="container-fluid">
          <div className="row page-row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 list-view list-view-box">
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
                height='100%'
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
