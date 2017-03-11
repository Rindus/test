import React, { Component } from 'react';
import Header from "./Header";
import Food from "./Food";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItemActiveIndex: 1
    }
  }
  changeNavItemActiveIndex(index) {
    if (index !== this.state.navItemActiveIndex) this.setState({navItemActiveIndex: index});
  } 
  render() {
    return (
      <div className="App container">
        <Header items={[1,2,3,4,5,6]} navItemActiveIndex={this.state.navItemActiveIndex} changeNavItemActive={this.changeNavItemActiveIndex.bind(this)}/>
        <Food/>
      </div>
    );
  }
}

export default App;
