import React from 'react';
import SearchContainer from './SearchContainer';

export default {
  component: SearchContainer,
  title: 'SearchContainer'
}

const Template = args => <SearchContainer {...args}/>;

export const Default = Template.bind({});
Default.args = {

};