import React from 'react';
import NotFoundPage from './NoFoundPage';


describe('NoFoundPage', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<NotFoundPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
