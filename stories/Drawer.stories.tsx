import type { Meta, StoryObj } from '@storybook/react';
import Drawer from '../lib/components/Drawer';
import Button from '../lib/components/Button';

const meta = {
    title: 'Drawer',
    component: Drawer,
    tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Main: Story = {
    render: () => (
        <Drawer
            show={true}
            onClose={() => alert("Called Close")}
            title='Hello, Drawer'
        >
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <div className="eb-py-4">
                <Button label="This is a button" />
            </div>
        </Drawer>
    )
};
