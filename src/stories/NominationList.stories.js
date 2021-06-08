import React from 'react';
import NominationList from './NominationList';

export default {
  component: NominationList,
  title: 'NominationList'
}

const Template = args => <NominationList {...args} />;

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