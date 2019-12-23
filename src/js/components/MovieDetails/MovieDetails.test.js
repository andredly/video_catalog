import React from 'react';
import toJson from 'enzyme-to-json';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  const movieDetails = {
    title: 'Call Me by Your Name',
    tagline: '',
    vote_average: 8.3,
    vote_count: 1887,
    release_date: '2017-10-27',
    poster_path: 'https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg',
    overview: 'Elio Perlman is spending the summer with his'
        + ' family at their vacation home in Lombardy, Italy.'
        + ' When his father hires a handsome doctoral student,'
        + ' the curious 17-year-old finds himself developing'
        + ' a growing attraction to the young man.',
    genres: [
      'Romance',
      'Drama',
    ],
    runtime: 132,
  };

  const wrapper = shallow(<MovieDetails movieDetails={movieDetails}/>);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
