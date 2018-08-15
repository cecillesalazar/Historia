import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import './setupTests';

describe('<App />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<App />);
  })
})
