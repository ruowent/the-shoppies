import ResultHeader from '../components/Nominations/ResultHeader';

export default {
  title: 'NominationResultHeader',
  component: ResultHeader
};

const Template = args => <ResultHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  nominationCount: 2,
  maxNominationCount: 5
};

export const Max = Template.bind({});
Max.args = {
  nominationCount: 5,
  maxNominationCount: 5
};