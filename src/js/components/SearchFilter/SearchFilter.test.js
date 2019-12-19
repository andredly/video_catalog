import React from 'react';
import toJson from 'enzyme-to-json';
import SearchFilter from './SearchFilter';


describe('SearchFilter', () => {
  const searchFetchMoviesMock = jest.fn();
  const setOptionMock = jest.fn();

  const props = {
    firstTypeValue: 'title',
    secondTypeValue: 'genre',
    firstTypeText: 'TITLE',
    secondTypeText: 'GENRE',
    typeText: 'SEARCH BY',
    searchParams: {
      sortBy: 'release_data',
    },
  };

  const wrapper = shallow(<SearchFilter
                    firstTypeValue={props.firstTypeValue}
                    firstTypeText={props.firstTypeText}
                    secondTypeValue={props.secondTypeValue}
                    secondTypeText={props.secondTypeText}
                    typeText={props.typeText}
                    searchFetchMovies={searchFetchMoviesMock}
                    setOption={setOptionMock}
                    searchParams={props.searchParams}/>);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correct values', () => {
    expect(wrapper.find('button').last().text()).toEqual('GENRE');
    expect(wrapper.find('button').last().props().value).toEqual('genre');
    expect(wrapper.find('button').first().text()).toEqual('TITLE');
    expect(wrapper.find('button').first().props().value).toEqual('title');
  });
});


describe('SearchFilter without the searchFetchMovies function', () => {
  const searchFetchMoviesMock = jest.fn();
  const setOptionMock = jest.fn();

  const props = {
    firstTypeValue: 'title',
    secondTypeValue: 'genre',
    firstTypeText: 'TITLE',
    secondTypeText: 'GENRE',
    typeText: 'SEARCH BY',
  };

  const event = {
    target: {
      value: '',
      classList: {
        contains: () => ('disabled'),
      },
    },
  };

  const wrapperWithoutFunction = shallow(<SearchFilter
        firstTypeValue={props.firstTypeValue}
        firstTypeText={props.firstTypeText}
        secondTypeValue={props.secondTypeValue}
        secondTypeText={props.secondTypeText}
        typeText={props.typeText}
        setOption={setOptionMock}/>);


  it('Expect searchFetchMovies to not be called on button click', () => {
    wrapperWithoutFunction.find('button').first().simulate('click', event);
    expect(searchFetchMoviesMock).not.toHaveBeenCalled();
  });
});
