import React from 'react';
import { mount, shallow } from 'enzyme';
import NewStory from '../newstory';
import './setupTests';
import PropTypes from 'prop-types';

describe('<NewStory />', () => {
  it('Should render option as a button', () => {
    const wrapper = shallow(<NewStory options={[]}/>);
    expect(wrapper.find(".newstory-button")).toHaveLength(1)
  })
})
