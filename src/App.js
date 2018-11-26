import React, { Component } from 'react';
import DN_logo from './DN-logo.svg';
import './App.css';
import styled from 'styled-components';
import Current from './current/current';
// import History from './history/history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section className="content-container">
          <div className="intro-text-container">
            <h3 className="intro-text">Welcome to NibblerCoin. <br/> Just an app to view cryptocurrency rates lmao</h3>
          </div>

          <div className="content">
            <Current/>
            {/* <History/> */}
          </div>
        </section>
      </div>
    );
  }
}

const HeaderContainer = styled.header`
  background-color: #efefef;
  height: 1em;
  padding: 31px;
  color: white;
  text-align: left;

`;

class Header extends Component{
  render(){
    return (
      <HeaderContainer>
        <img src={DN_logo} className="App-logo" alt="logo" />
        <h1 className="App-title">NibblerCoin</h1>
      </HeaderContainer>
    );
  }
}

export default App;
