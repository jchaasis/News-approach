import React, { Component } from 'react';


class NewsStory extends Component {

  render(){

    return(
      <li className="article">
        <h4> {this.props.story.title} </h4>
        <img src={this.props.story.urlToImage} alt ="" height="50" className="articleImage"/>
        <p> {this.props.story.description} </p>
      </li>
    );
  }
}

export default NewsStory;
