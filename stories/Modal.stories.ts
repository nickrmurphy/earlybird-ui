import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/components/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
        control: 'select',
        options: ['primary', 'secondary', 'danger']
    }
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    title: 'Hello, Modal',
    bodyText: 'Lorem ipsum',
    buttonLabel: 'Go back to dashboard',
    buttonVariant: 'primary',
  },
};
