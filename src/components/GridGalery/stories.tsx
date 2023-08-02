import { GridGalery } from '.';
import { mGGalery } from './mockGGalery';

interface PropsObj {
  altText: string;
  srcImage: string;
}

interface Props {
  background: boolean;
  title: string;
  description: string;
  grid: PropsObj[];
}

export default {
  title: 'Components/GridGalery',
  component: GridGalery,
  args: mGGalery,
};

export const Template = (args: Props) => {
  return (
    <div>
      <GridGalery {...args} />
    </div>
  );
};
