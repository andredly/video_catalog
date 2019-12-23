import React from 'react';

import Logo from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Logo/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
