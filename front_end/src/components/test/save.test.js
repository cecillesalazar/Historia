import React from 'react';
import { mount, shallow } from 'enzyme';
import Save from '../save';
import './setupTests';

describe('<Save />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Save />);
  })

  it('Should render a save button', () => {
    const wrapper = shallow(<Save />);
    expect(wrapper.find("save-button"));
  })
})
