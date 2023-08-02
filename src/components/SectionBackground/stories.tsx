import { SectionBackground } from '.';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'Components/SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          doloribus debitis minima nam beatae alias eius, mollitia asperiores
          animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
          quaerat aspernatur expedita!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <SectionBackground background={false} {...args} />
    </div>
  );
};
