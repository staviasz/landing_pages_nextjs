import { Heading } from '.';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Title',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args: ArgTypes) => (
  <Heading
    colordark="dark"
    as="h1"
    size="big"
    uppercase="lowercase"
    {...args}
  />
);
export const Dark = (args: ArgTypes) => (
  <Heading
    colordark="light"
    as="h1"
    size="big"
    uppercase="lowercase"
    {...args}
  />
);

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
Dark.parameters = {
  colordark: 'light',
};
