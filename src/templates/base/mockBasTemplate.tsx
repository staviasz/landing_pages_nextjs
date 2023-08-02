import { GridText } from '../../components/GridText';
import { mGText } from '../../components/GridText/mockGridText';
import { logoData } from '../../components/LogoLink/mockLogoData';
import { links } from '../../components/Menu/mockLinks';

export const mBase = {
  children: (
    <>
      <GridText {...mGText} background={true} />
      <GridText {...mGText} />
      <GridText {...mGText} background={true} />
      <GridText {...mGText} />
      <GridText {...mGText} background={true} />
      <GridText {...mGText} />
    </>
  ),
  links: links,
  logoData: logoData,
  footerHtml:
    'Projeto executado por <b>Erick staviasz</b> no curso de react de Otavio Miranda',
};
