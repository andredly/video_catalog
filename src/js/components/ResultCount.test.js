import React from "react";
import ResultCount from "./ResultCount";
import toJson from "enzyme-to-json";


describe("ResultCount", () => {
    const props = {
        count : 10
    };

    const wrapper = shallow(<ResultCount text={"10 movies found"}/>);

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders with count = 10', () => {
        expect(wrapper.find('.btn').text()).toEqual("10 movies found");
    });
});

