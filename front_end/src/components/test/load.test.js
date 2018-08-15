import React from 'react';
import { mount, shallow } from 'enzyme';
import Load from '../load';
import './setupTests';

describe('<Load />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Load />);
  })
})
