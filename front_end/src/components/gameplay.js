import React from 'react';
import StoryNode from './storynode.js';

export default class Gameplay extends React.Component {
  render() {
    return (
      <div>
        <StoryNode />
        <button type="button">Quit</button>
        <button type="button">Save</button>
        <button type="restart">Restart</button>
      </div>
    )
  }

}
