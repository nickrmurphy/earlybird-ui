import type { Meta, StoryObj } from '@storybook/react';

import Button from '../lib/components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Hello world',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Hello world',
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Hello world',
    disabled: false,
  },
};

export const Expand: Story = {
  args: {
    variant: 'primary',
    label: 'Hello world',
    expand: true,
  },
};
