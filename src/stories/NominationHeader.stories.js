import NominationHeader from './NominationHeader';

export default {
  title: 'NominationHeader',
  component: NominationHeader
};

const Template = NominationHeader.bind({});

export const Default = (args) => <Template {...args} />;
Default.args = {
  nominationCount: 2,
  maxNominationCount: 5
};

export const Max = (args) => <Template {...args} />;
Max.args = {
  nominationCount: 5,
  maxNominationCount: 5
};