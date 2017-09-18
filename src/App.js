import React, { Component } from 'react';
import './App.css';

//import components
import NewsSource from './components/NewsSource';
// import NewsStory from './components/NewsStory';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      sources: ['bloomberg', 'espn', 'hacker-news']
    }
  }

  render() {

    let favoriteSources = this.state.sources.map(source => <NewsSource source={source} />)

    return (
      <div className="App">
        <div className="App-header">
          <h1> News Approach </h1>
        </div>
        <div>
        </div>
        <div className="main">
          {favoriteSources}
        </div>
        </div>
    );
  }
}

export default App;
