import { Title } from './styles';

interface HeadingProps {
  children: React.ReactNode;
  colordark?: 'light' | 'dark';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xhuge' | 'big' | 'medium' | 'small';
  uppercase?: 'uppercase' | 'lowercase';
}

export const Heading = ({
  children,
  colordark = 'dark',
  as = 'h1',
  size = 'big',
  uppercase = 'lowercase',
}: HeadingProps) => {
  return (
    <Title $colordark={colordark} as={as} size={size} $uppercase={uppercase}>
      {children}
    </Title>
  );
};
