import Link from 'next/link';
import { MenuLink } from './styles';

interface MLinkProps {
  children: string | React.ReactNode;
  href: string;
  target?: '_blank' | '_self';
}
export const MLink = ({ children, href, target = '_self' }: MLinkProps) => {
  const nextLink = href.match(/^\//) ? true : false;
  if (nextLink) {
    return (
      <Link href={href} passHref>
        <MenuLink target={target} href={href}>
          {children}
        </MenuLink>
      </Link>
    );
  }
  return (
    <MenuLink target={target} href={href}>
      {children}
    </MenuLink>
  );
};
