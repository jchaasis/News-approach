import React, { Component } from 'react';
import './App.css';

//import components
import NewsSource from './components/NewsSource';
// import NewsStory from './components/NewsStory';

class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      sources: ['bloomberg', 'business insider', 'hacker news']
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <NewsSource sources={this.state.sources}/>
      </div>
    );
  }
}

export default App;
