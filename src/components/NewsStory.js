import React, { Component } from 'react';


class NewsStory extends Component {

  render(){

    return(
      <li>
        <h4> {this.props.story.title} </h4>
        <p> {this.props.story.description} </p>
      </li>
    );
  }
}

export default NewsStory;
