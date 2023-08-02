import { SectionContainer } from '../SectionContainer';
import { Container } from './styles';

const random = () =>
  `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

interface SectionProps {
  children: React.ReactNode;
  background: boolean;
  sectionId?: string;
}

export const SectionBackground = ({
  children,
  background = false,
  sectionId,
}: SectionProps) => {
  const backgroundColor = background ? 'true' : 'false';
  const id = sectionId ? sectionId : random();
  return (
    <Container background={backgroundColor} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
