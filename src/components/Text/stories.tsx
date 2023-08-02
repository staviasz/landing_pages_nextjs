import { TextContent } from '.';
import { data } from '../GridTwoColumns/mockpageData';

interface ArgTypes {
  children: string;
}

export default {
  title: 'Components/TextContent',
  component: TextContent,
  args: {
    children: data,
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <TextContent {...args} />
    </div>
  );
};
