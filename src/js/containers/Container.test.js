import React from 'react';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Container from './Container';
import Header from '../components/Header';
import Footer from '../components/Footer';


describe('Container', () => {
  const wrapper = shallow(<Container/>);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Header, SearchContainer, ResultPanel, ResultsBody, Footer components are present', () => {
    expect(wrapper.find(Router)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(4);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
