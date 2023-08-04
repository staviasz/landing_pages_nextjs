import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { useState } from 'react';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { NavLink, NavLinkProps } from '../NavLinks';
import { SectionContainer } from '../SectionContainer';
import { Button, Container, MenuContainer } from './styles';

interface MenuProps extends NavLinkProps {
  children?: string | React.ReactNode;
  logoData: LogoLinkProps;
}

export const Menu = ({ links = [], logoData }: MenuProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Button
        $visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Button>
      <Container $visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLink links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};
