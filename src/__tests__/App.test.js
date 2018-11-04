import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  let component = shallow(<App />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
