import React from 'react';
import Result from '../components/Nominations/Result';

export default {
  component: Result,
  title: 'NominationResult'
}

const Template = args => <Result {...args} />;

export const Default = Template.bind({});
Default.args = {
  Title: 'Along Came a Spider',
  Year: '2001',
  Poster: 'https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
};