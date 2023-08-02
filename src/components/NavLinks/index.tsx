import { MenuLink } from '../MenuLink/styles';
import { NLink } from './styles';

export type LinkObj = {
  children: string | React.ReactNode;
  href: string;
  target?: '_blank' | '_self' | string;
};

export interface NavLinkProps {
  links?: LinkObj[];
}
export const NavLink = ({ links = [] }: NavLinkProps) => {
  return (
    <NLink aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.href} {...link} />
      ))}
    </NLink>
  );
};
