import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import toJson from "enzyme-to-json";


describe("Header", () => {
    const wrapper = shallow(<Header/>);

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

