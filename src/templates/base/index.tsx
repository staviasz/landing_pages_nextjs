import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/Gotop';
import { LogoLinkProps } from '../../components/LogoLink';
import { Menu } from '../../components/Menu';
import { LinkObj } from '../../components/NavLinks';
import { Container } from './styles';

interface BaseProps {
  children: React.ReactNode;
  links?: LinkObj[];
  logoData: LogoLinkProps;
  footerHtml: string;
}
export const Base = ({ children, links, logoData, footerHtml }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData}></Menu>
      <Container>
        {children}
        <Footer html={footerHtml}></Footer>
      </Container>
      <GoTop />
    </>
  );
};
