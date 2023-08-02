import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextContent } from '../Text';
import { Container, Image, ImgContainer, TextContainer } from './styles';

interface GridTwoColumnProps {
  children?: React.ReactNode | string;
  title: string;
  text: string;
  srcImage: string;
  background: boolean;
  sectionId?: string;
}

export const GridTwoColumn = ({
  title,
  text,
  srcImage,
  background = false,
  sectionId = '',
}: GridTwoColumnProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <TextContainer>
          <Heading
            as="h2"
            uppercase="uppercase"
            colordark={background ? 'light' : 'dark'}
          >
            {title}
          </Heading>
          <TextContent>{text}</TextContent>
        </TextContainer>
        <ImgContainer>
          <Image src={srcImage} alt={title} />
        </ImgContainer>
      </Container>
    </SectionBackground>
  );
};
