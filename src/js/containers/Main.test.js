import React from "react";
import Main from "./Main";
import toJson from "enzyme-to-json";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import ErrorBoundary from "./error/ErrorBoundary";
import Container from "./Container";

describe("Main", () => {

    const wrapper = shallow(<Main/>);

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Provider, PersistGate, ErrorBoundary, Container components are present', () => {
        expect(wrapper.find(Provider)).toHaveLength(1);
        expect(wrapper.find(PersistGate)).toHaveLength(1);
        expect(wrapper.find(ErrorBoundary)).toHaveLength(1);
        expect(wrapper.find(Container)).toHaveLength(1);
    });

});

