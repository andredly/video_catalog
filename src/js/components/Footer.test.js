import React from "react";
import Footer from "./Footer";
import toJson from 'enzyme-to-json';
import Logo from "./Logo";


describe("Footer", () => {

    const wrapper = shallow(<Footer/>);

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Logo is present', () => {
        expect(wrapper.find(Logo)).toHaveLength(1);
    });
});

