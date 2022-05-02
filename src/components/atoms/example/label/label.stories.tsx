import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { ExampleLabel } from './label.component';

export default {
  component: ExampleLabel,
  args: {
    text: 'Example Label',
  },
} as ComponentMeta<typeof ExampleLabel>;

type Story = ComponentStoryObj<typeof ExampleLabel>;

export const Default: Story = {};
