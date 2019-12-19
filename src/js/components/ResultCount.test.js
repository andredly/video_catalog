import React from 'react';
import toJson from 'enzyme-to-json';
import ResultCount from './ResultCount';


describe('ResultCount', () => {
  const wrapper = shallow(<ResultCount text={'10 movies found'}/>);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with count = 10', () => {
    expect(wrapper.find('.btn').text()).toEqual('10 movies found');
  });
});
