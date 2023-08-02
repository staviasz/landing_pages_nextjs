import { Base } from '.';
import { LogoLinkProps } from '../../components/LogoLink';
import { LinkObj } from '../../components/NavLinks';
import { mBase } from './mockBasTemplate';

interface ArgTypes {
  children: React.ReactNode;
  links?: LinkObj[];
  logoData: LogoLinkProps;
  footerHtml: string;
}

export default {
  title: 'Templates/Base',
  component: Base,
  args: mBase,
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
