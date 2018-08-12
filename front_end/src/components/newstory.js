import React from 'react';
import { getRandomStory } from '../backendApi.js';
import { changeStory } from '../actions/actions.js';

export default class NewStory extends React.Component {
  render() {
    if(this.props.options.length === 0) {
      return (
       <div>
         <button type="button" onClick={() => getRandomStory().then((story) => this.props.dispatch(changeStory(story)))}>Play New Story</button>
       </div>
      )
    } else {
      return ''
    }
  }
}
