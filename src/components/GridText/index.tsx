import { randomKey } from '@/utils/randomKey';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextContent } from '../Text';
import { Container, Grid, GridElement } from './styles';

interface GridObj {
  title: string;
  description: string;
}

interface GridTextProps {
  background: boolean;
  title: string;
  description: string;
  grid: GridObj[];
  sectionId?: string;
}

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridTextProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading
          as="h2"
          size="big"
          uppercase="uppercase"
          colordark={background ? 'light' : 'dark'}
        >
          {title}
        </Heading>
        <TextContent>{description}</TextContent>
        <Grid>
          {grid.map((el) => (
            <GridElement key={randomKey(title)}>
              <Heading
                as="h3"
                size="medium"
                colordark={background ? 'light' : 'dark'}
              >
                {el.title}
              </Heading>
              <TextContent>{el.description}</TextContent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
