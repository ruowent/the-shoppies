import React from 'react';

import SearchBox from './SearchBox';

export default {
  component: SearchBox,
  title: 'SearchBox'
}

const Template = args => <SearchBox {...args}/>;

export const Default = Template.bind({});
Default.args = {

};