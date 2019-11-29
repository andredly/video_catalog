import React from "react";
import {BackButton} from "./BackButton";

describe("BackButton", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<BackButton/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

