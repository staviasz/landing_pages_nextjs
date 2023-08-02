import { Container } from './styles';

interface SectionProps {
  children: React.ReactNode;
}

export const SectionContainer = ({ children }: SectionProps) => {
  return <Container>{children}</Container>;
};
