import type { Meta, StoryObj } from '@storybook/react';
import { InfoList } from '../lib/components/InfoList/InfoList';
import { Button, InfoListForm, InfoListItem } from '../lib/main';

const meta = {
    title: 'InfoList',
    component: InfoList,
    tags: ['autodocs'],
} satisfies Meta<typeof InfoList>;

export default meta;
type Story = StoryObj<typeof InfoList>;

export const StringOnly: Story = {
    args: {
        header: "Account Information",
        subheader: "A little informatoin about this user",
        items: [
            { label: 'Username', data: '@nickmurphy'},
            { label: 'Bio', data: `Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ,ea officia proident. Irure nostrud
            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.`},
            { label: 'Email', data: 'nick@earlybird.foo'}
        ],
    },
};

export const WithChildren: Story = {
    render: () => (
        <InfoListForm
            header="Account Information"
            subheader="A little informatoin about this user"
        >
            <InfoListItem label='Username'>@nickmurphy</InfoListItem>
            <InfoListItem label='Contact Info'>
                <ul>
                    <li>Phone: 773-555-1234</li>
                    <li>Email: nick@earlybird.foo</li>
                </ul>
            </InfoListItem>
            <InfoListItem label='Delete Account'>
                <Button label='Delete' variant='danger' />
            </InfoListItem>
        </InfoListForm>
    )
};
