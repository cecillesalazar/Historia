import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import Test from './setupTests';

describe('<App />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<App />);
  })
})

// "enzyme": "^3.4.1",
// "enzyme-adapter-react-16": "^1.2.0"
