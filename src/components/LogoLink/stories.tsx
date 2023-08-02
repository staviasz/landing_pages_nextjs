import { LogoLink } from '.';
import { logoData } from './mockLogoData';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'Components/LogoLink',
  component: LogoLink,
  args: {
    logoData: logoData,
  },
};

export const ImageOnly = (args: ArgTypes) => {
  return (
    <div>
      <LogoLink {...logoData} {...args} />
    </div>
  );
};

export const TextOnly = (args: ArgTypes) => {
  return (
    <div>
      <LogoLink {...logoData} {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImage: '',
};
