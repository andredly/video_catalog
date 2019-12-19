import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router';
import BackButton from './BackButton';

describe('BackButton', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const clearStateMock = jest.fn();

  const initialState = {
    clearState: clearStateMock,
  };
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
            <MemoryRouter>
                <BackButton store={store}/>
            </MemoryRouter>,
    );
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('Expect clearState function was called after clickin on button', () => {
    wrapper.find('button').simulate('click');
    expect(store.getActions()).toEqual([
      {
        type: 'CLEAR_STATE',
      }]);
  });
});
