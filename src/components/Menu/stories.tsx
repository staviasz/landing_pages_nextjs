import { Menu } from '.';

import { logoData } from '../LogoLink/mockLogoData';
import { links } from './mockLinks';

interface Props {
  chilgren: string | React.ReactNode;
}

export default {
  title: 'Components/Menu',
  component: Menu,
  args: {
    links: links,
    logoData: logoData,
  },
};

export const Template = (args: Props) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu logoData={logoData} {...args} />
    </div>
  );
};
