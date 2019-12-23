import React from 'react';
import toJson from 'enzyme-to-json';
import Header from './Header';


describe('Header', () => {
  const wrapper = shallow(<Header/>);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
