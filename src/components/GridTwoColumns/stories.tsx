import { GridTwoColumn } from '.';
import { data } from './mockpageData';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'Components/GridTwoColumn',
  component: GridTwoColumn,
  args: {
    data: data,
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <GridTwoColumn {...data} {...args} />
    </div>
  );
};
