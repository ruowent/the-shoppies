import React from 'react';
import Nomination from './Nomination';

export default {
  component: Nomination,
  title: 'Nomination'
}

const Template = args => <Nomination {...args} />;

export const Default = Template.bind({});
Default.args = {
  Title: 'Along Came a Spider',
  Year: '2001',
  Poster: 'https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
};