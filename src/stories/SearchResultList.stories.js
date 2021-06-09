import React from 'react';

import ResultList from '../components/Search/ResultList';

export default {
  componet: ResultList,
  title: 'SearchResultList'
};

const Template = args => <ResultList {...args} />;

export const Default = Template.bind({});
Default.args = {
  results: [
    {
      Title: 'Spider Man',
      Year: '2021',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      imdbID: 'tt5671882'
    },
    {
      Title: 'Bat Man',
      Year: '2020',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      imdbID: 'tt5671883'
    }
  ],
  nominations: []
}

export const Empty = Template.bind({});
Empty.args = {
  results: [],
  nominations: []
}

export const HasNominated = Template.bind({});
HasNominated.args = {
  ...Default.args,
  nominations: [Default.args.results[0]]
}