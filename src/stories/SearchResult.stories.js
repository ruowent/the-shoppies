import React from 'react';
import SearchResult from './SearchResult';

export default {
  component: SearchResult,
  title: 'SearchResult'
}

const Template = args => <SearchResult {...args} />;

export const Default = Template.bind({});
Default.args = {
  Title: 'Along Came a Spider',
  Year: '2001',
  Poster: 'https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  imdbID: 'tt5671883',
  isNominated: false
};

export const Nominated = Template.bind({});
Nominated.args = {
  ...Default.args,
  isNominated: true
};