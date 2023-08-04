import Link from 'next/link';
import { Heading } from '../Heading';
import { LinkContent } from './styles';

export interface LogoLinkProps {
  children?: React.ReactNode;
  text: string;
  link: string;
  srcImage?: string;
}
export const LogoLink = ({ text, link, srcImage = '' }: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  if (nextLink) {
    return (
      <Heading size="small" uppercase="uppercase">
        <Link href={link} passHref>
          <LinkContent>
            {!!srcImage && <img src={srcImage} alt={text} />}
            {!srcImage && text}
          </LinkContent>
        </Link>
      </Heading>
    );
  }
  return (
    <Heading size="small" uppercase="uppercase">
      <LinkContent href={link}>
        {!!srcImage && <img src={srcImage} alt={text} />}
        {!srcImage && text}
      </LinkContent>
    </Heading>
  );
};

// Link: pertence ao next e tem funcionamento parecido com o
//   Link do react - router - dom, esse componente recebe o link
//   e através do "passhref" distribui para componentes internos

// linkontainer: pertencem aos meus components
