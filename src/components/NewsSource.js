import React, { Component } from 'react';

import NewsStory from './NewsStory';

class NewsSource extends Component {
  constructor(props){
    super(props);

    this.state = {
      source: this.props.source,
      newsResults: []
    }
  }

componentWillMount(){
  fetch('https://newsapi.org/v1/articles?source=' + this.state.source + '&sortBy=top&apiKey=629ea07b63e54ee296b6cbfab902ecf8')
  .then(response => response.json())
  .then(response => {

    this.setState({
      newsResults: response.articles
    })
  })
}

  render(){

    let stories = this.state.newsResults.map(newstory => <NewsStory story={newstory} />)

    return(
      <div className="container source">
        <h1>{this.state.source.toUpperCase()}</h1>
        <ul>
          {stories}
        </ul>
      </div>
    )
  }
}

export default NewsSource;
