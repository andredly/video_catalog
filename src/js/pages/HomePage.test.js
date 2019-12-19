import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import HomePage from './HomePage';


describe('HomePage', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});
  const wrapper = shallow(
        <HomePage store={store}/>,
  );
  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
