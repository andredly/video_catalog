import React from 'react';
import {storiesOf} from '@storybook/react';
import Footer from "../src/js/components/Footer";
import Constant from "./Constant";

storiesOf(Constant.chapter + "/" + Constant.footer, module)
    .add('with text', () => (
        <Footer/>
    ));
