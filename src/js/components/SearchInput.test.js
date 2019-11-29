import React from "react";
import SearchInput from "./SearchInput";
import toJson from "enzyme-to-json";


describe("SearchInput", () => {

    const props = {
        searchParams : {
            search : "Test"
        }
    };

    const wrapper = shallow(<SearchInput searchParams={props.searchParams}/>);

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correct values', () => {
        expect(wrapper.find('.form-control').last().props().value).toEqual("Test");
    });


});
