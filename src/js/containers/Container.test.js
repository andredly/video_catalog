import React from "react";
import Container from "./Container";
import toJson from "enzyme-to-json";
import Header from "../components/Header";
import SearchContainer from "./SearchContainer";
import ResultPanel from "./ResultPanel";
import ResultsBody from "../components/ResultBody/ResultsBody";
import Footer from "../components/Footer";


describe("Container", () => {

    const wrapper = shallow(<Container/>);

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Header, SearchContainer, ResultPanel, ResultsBody, Footer components are present', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(SearchContainer)).toHaveLength(1);
        expect(wrapper.find(ResultPanel)).toHaveLength(1);
        expect(wrapper.find(ResultsBody)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

});
