import { Text } from './styles';

interface TextContentProps {
  children: string;
}
export const TextContent = ({ children }: TextContentProps) => {
  return <Text dangerouslySetInnerHTML={{ __html: children }} />;
};
