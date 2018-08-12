import React from 'react';
import { getRandomStory } from '../backendApi.js';
import { changeStory } from '../actions/actions.js';

export default class newStory extends React.Component {
  render() {
    if(this.props.options.length === 0) {
      return (
       <div>
         <button type="button">Play New Story</button>
       </div>
      )
    } else {
      return ''
    }
  }
}
