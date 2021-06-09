import React from 'react';
import ResultList from '../components/Nominations/ResultList';

export default {
  component: ResultList,
  title: 'NominationResultList'
}

const Template = args => <ResultList {...args} />;

export const Default = Template.bind({});
Default.args = {
  nominations: [
    {
      Title: 'Spider Man',
      Year: '2021',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
    },
    {
      Title: 'Bat Man',
      Year: '2020',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
    }
  ]
}

export const Empty = Template.bind({});
Empty.args = {
  nominations: []
}