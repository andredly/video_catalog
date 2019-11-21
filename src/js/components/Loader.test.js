import React from "react";
import {Loader} from "./Loader";

describe("Loader", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Loader load={true}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('not render', () => {
        const tree = renderer
            .create(<Loader load={false}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

