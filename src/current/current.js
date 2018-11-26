import React, {Component} from 'react';
import './current.css';
import axios from 'axios';

class Current extends Component{
  //sets initial states
  constructor(){
    super();
    this.state = {btcPrice: '', ltcPrice: '', ethPrice: ''};
  }

  //when the component is instantiated and inserted into DOM
  componentWillMount(){
    //sends API request from axios to get cryptocurrency-rates
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
      .then(response => { //takes response and sets new states to each prop
        this.setState({btcPrice: response.data.BTC.USD});
        this.setState({ltcPrice: response.data.LTC.USD});
        this.setState({ethPrice: response.data.ETH.USD});
      })
      .catch(error => { console.log(error) })
  }

  render(){
    return(
      <div className="today-content-container">
        <h2 className="intro-text">Current Price</h2>

        <div className="today-results">
          <div className="btc-col">
            <h3 className="crypto-price">${this.state.btcPrice}</h3>
            <p className="small-text">1 BTC - USD</p>
          </div>
          <div className="ltc-col">
            <h3 className="crypto-price">${this.state.ltcPrice}</h3>
            <p className="small-text">1 LTC - USD</p>
          </div>
          <div className="eth-col">
            <h3 className="crypto-price">${this.state.ethPrice}</h3>
            <p className="small-text">1 ETH - USD</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Current;
