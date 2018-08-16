import React from 'react';
import { mount, shallow } from 'enzyme';
import StoryNodeScript from '../storynodescript';
import './setupTests';

describe('<StoryNodeScript />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<StoryNodeScript />);
  })
});
