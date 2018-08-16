import React from 'react';
import { mount, shallow } from 'enzyme';
import Restart from '../restart';
import './setupTests';

describe('<Restart />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Restart />);
  })

  it('Should render a restart button', () => {
    const wrapper = shallow(<Restart />);
    expect(wrapper.find("restart-button"));
  })
})
