import { MenuLink } from './styles';

interface MLinkProps {
  children: string | React.ReactNode;
  href: string;
  target?: '_blank' | '_self';
}
export const MLink = ({ children, href, target = '_self' }: MLinkProps) => {
  return (
    <MenuLink target={target} href={href}>
      {children}
    </MenuLink>
  );
};
