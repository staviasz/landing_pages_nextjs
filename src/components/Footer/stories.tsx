import { Footer } from '.';

interface ArgTypes {
  html: string;
}

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    html: 'Projeto executado por <b>Erick staviasz</b> no curso de react de Otavio Miranda',
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
