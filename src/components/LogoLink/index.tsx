import { Heading } from '../Heading';
import { LinkContent } from './styles';

export interface LogoLinkProps {
  children?: React.ReactNode;
  text: string;
  link: string;
  srcImage?: string;
}
export const LogoLink = ({ text, link, srcImage = '' }: LogoLinkProps) => {
  return (
    <Heading size="small" uppercase="uppercase">
      <LinkContent href={link}>
        {!!srcImage && <img src={srcImage} alt={text} />}
        {!srcImage && text}
      </LinkContent>
    </Heading>
  );
};
