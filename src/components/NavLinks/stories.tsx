import { NavLink } from '.';
import { links } from '../Menu/mockLinks';

interface ArgTypes {
  children: string;
}

export default {
  title: 'Components/NavLink',
  component: NavLink,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <NavLink links={links} {...args} />
    </div>
  );
};
