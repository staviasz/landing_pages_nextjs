import { randomKey } from '@/utils/randomKey';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextContent } from '../Text';
import { Container, Grid, GridElement, Image } from './styles';

interface GridObj {
  altText: string;
  srcImage: string;
}

interface GridGaleryProps {
  background: boolean;
  title: string;
  description: string;
  grid: GridObj[];
  sectionId?: string;
}

export const GridGalery = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridGaleryProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading
          as="h2"
          size="xhuge"
          uppercase="uppercase"
          colordark={background ? 'light' : 'dark'}
        >
          {title}
        </Heading>
        <TextContent>{description}</TextContent>
        <Grid>
          {grid.map((el) => (
            <GridElement key={randomKey(title)}>
              <Image src={el.srcImage} alt={el.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
