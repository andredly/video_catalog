import React from "react";
import {NoFilmsFound} from "./NoFilmsFound";


describe("NoFilmsFound", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<NoFilmsFound/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

