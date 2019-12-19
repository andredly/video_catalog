import addons from '@storybook/addons'
import registerRedux from 'addon-redux/register'
import '@storybook/addon-options/register';
import '@storybook/addon-knobs/register';
registerRedux(addons);
