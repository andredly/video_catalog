import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const Something = () => null;

describe('ErrorBoundary', () => {
  it('should display an ErrorMessage if wrapped component throws', () => {
    const wrapper = shallow(
            <ErrorBoundary>
                <Something />
            </ErrorBoundary>,
    );

    const error = new Error('test');

    wrapper.find(Something).simulateError(error);
    expect(wrapper.find('details').text()).toContain('Error: test');
  });
});
