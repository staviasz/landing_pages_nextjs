import DOMPurify from 'isomorphic-dompurify';
import { Text } from './styles';

interface TextContentProps {
  children: string;
}
export const TextContent = ({ children }: TextContentProps) => {
  const safeHtml = DOMPurify.sanitize(children);
  return <Text dangerouslySetInnerHTML={{ __html: safeHtml }} />;
};
