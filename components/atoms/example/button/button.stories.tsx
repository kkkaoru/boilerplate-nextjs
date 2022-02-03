import { action } from '@storybook/addon-actions';

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { ExampleButton } from './button.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: ExampleButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: 'Button',
    onClick: action('Click'),
  },
} as ComponentMeta<typeof ExampleButton>;

type Story = ComponentStoryObj<typeof ExampleButton>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Primary: Story = {
  args: {
    primary: true,
  },
};
