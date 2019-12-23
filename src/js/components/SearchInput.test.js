import React from 'react';
import toJson from 'enzyme-to-json';
import SearchInput from './SearchInput';


describe('SearchInput', () => {
  const props = {
    searchParams: {
      search: 'Test',
    },
  };

  const event = {
    target: {
      value: 'test',
    },
  };

  const onSearchTextChangeMock = jest.fn();

  const wrapper = shallow(<SearchInput searchParams={props.searchParams} setSearchText={onSearchTextChangeMock}/>);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correct values', () => {
    expect(wrapper.find('.form-control').last().props().value).toEqual('Test');
  });

  it('Expect setSearchTextMock to not be called on button click', () => {
    wrapper.find('.form-control').first().simulate('change', event);
    expect(onSearchTextChangeMock).toHaveBeenCalled();
  });
});
