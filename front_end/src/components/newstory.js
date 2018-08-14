import React from 'react';
import { getRandomStory } from '../backendApi.js';
import { changeStory } from '../actions/actions.js';
import './components-css/newstory.css';

export default class NewStory extends React.Component {
  render() {
    if(this.props.options.length === 0) {
      return (
       <div>
         <button className="newstory-button" type="button" onClick={() => getRandomStory().then((story) => this.props.dispatch(changeStory(story)))}>Play New Story</button>
       </div>
      )
    } else {
      return ''
    }
  }
}
