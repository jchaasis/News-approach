import React, { Component } from 'react';

import NewsStory from './NewsStory';

class NewsSource extends Component {
  constructor(props){
    super(props);

    this.state = {
      source: '',
      newsResults: []
    }

  }

//api key: 629ea07b63e54ee296b6cbfab902ecf8
//bloomberg: https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=629ea07b63e54ee296b6cbfab902ecf8

//business-insider: https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=629ea07b63e54ee296b6cbfab902ecf8

//hacker-news: GET https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=629ea07b63e54ee296b6cbfab902ecf8


componentWillMount(){
  fetch('https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=629ea07b63e54ee296b6cbfab902ecf8')
  .then(response => response.json())
  .then(response => {

    this.setState({
      newsResults: response.articles
    })
  })
}

  render(){

    const sources = this.props.sources;

    let stories = this.state.newsResults.map(newstory => <NewsStory story={newstory} />)

    return(
      <div>
        <h1>Source Title</h1>
        <ul>

          {stories}

        </ul>
      </div>
    )
  }
}

export default NewsSource;
