import { GridContent } from '.';
import { htmlContent } from './mockHtmlContent';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'Components/GridContent',
  component: GridContent,
  args: {
    date: htmlContent,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <GridContent {...htmlContent} {...args} />
    </div>
  );
};
