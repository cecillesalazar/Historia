import React from 'react';
import helper from './helper.js';
import { changeNode } from '../actions/actions.js';
import StoryNode from './storynode.js';

export default class Gameplay extends React.Component {
  render() {
    return (
      <div>
        <StoryNode />
      </div>
    )
  }

}
