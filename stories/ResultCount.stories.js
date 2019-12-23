import React from 'react';
import {storiesOf} from '@storybook/react';
import {Provider} from 'react-redux'
import addons from '@storybook/addons'
import withRedux from 'addon-redux/withRedux'
import rootReducer from "../src/js/store/reducers";
import Constant from "./Constant";
import {text, withKnobs} from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import withReduxEnhancer from 'addon-redux/enhancer'
import {createStore} from "redux";
import ResultCount from "../src/js/components/ResultCount";

const store = createStore(rootReducer, withReduxEnhancer);
const withReduxSettings = {
    Provider,
    store
};

export default {
    title: "Storybook Knobs",
    decorators: [withKnobs]
};

const withReduxDecorator = withRedux(addons)(withReduxSettings);

storiesOf(Constant.chapter + "/" + Constant.resultCount, module)
    .addDecorator(withReduxDecorator)
    .add('with text', withInfo({})(() => {
            const labelText = text('Label', "ResultCount Text");
            return (
                <ResultCount text={labelText}/>
            );
        })
    )
    .addDecorator(withKnobs);
