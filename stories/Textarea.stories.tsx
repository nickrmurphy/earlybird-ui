import type { Meta, StoryObj } from '@storybook/react';

import Textarea from '../lib/components/Textarea';

const meta = {
  title: 'Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    id: 'sb-textarea',
    label: 'Hello label',
    rows: 4,
  },
};
