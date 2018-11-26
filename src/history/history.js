import React, {Component} from 'react';
import './history.css';
import axios from 'axios';
import moment from 'moment';

class History extends Component {
  constructor (){
    super();
    this.state = {yesterdayPrice: {}, twodaysPrice: {}, threedaysPrice: {}, fourdaysPrice: {}, fivedaysPrice: {} }

    this.getBTCPrice = this.getBTCPrice.bind(this);
    this.getLTCPrice = this.getLTCPrice.bind(this);
    this.getETHPrice = this.getETHPrice.bind(this);
  }

  getBTCPrice(timestamp){
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts='+ timestamp);
  }
  getLTCPrice(timestamp){
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts='+ timestamp);
  }
  getETHPrice(timestamp){
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts='+ timestamp);
  }

  componentWillMount(){

  }

  render(){
    return(<div>Hello World. This aint built yet</div>);
  }
}

export default History;
