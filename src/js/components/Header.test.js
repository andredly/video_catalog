import React from "react";
import renderer from 'react-test-renderer';
import Logo from "./Logo";
import Header from "./Header";

describe("Header", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Header/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

