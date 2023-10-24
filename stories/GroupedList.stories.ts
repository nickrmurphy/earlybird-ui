import type { Meta, StoryObj } from '@storybook/react';
import GroupedList from '../lib/components/GroupedList';
import { ListGroupItemProps } from '../lib/components/GroupedList/ListGroupItem';

const getContacts = (names: string[]) => {
    const actionableContacts: { [key: string]: ListGroupItemProps[] } = {};
    const staticContacts: { [key: string]: ListGroupItemProps[] } = {};

    names.forEach((name, i) => {
        const letter = name.charAt(0);
        const staticObj = { id: i, label: name };
        const actionObj = { ...staticObj, onClick: () => alert(name) };
        if (actionableContacts[letter]) {
            staticContacts[letter].push(staticObj);
            actionableContacts[letter].push(actionObj);
        } else {
            staticContacts[letter] = [staticObj];
            actionableContacts[letter] = [actionObj];
        }
    });
    return { actionableContacts, staticContacts };
}


const names = [
    "Aaron",
    "Amy",
    "Bert",
    "Bonnie",
    "Douglas",
    "Earnie",
    "Franklin",
]

const { actionableContacts, staticContacts } = getContacts(names);

const meta = {
    title: 'GroupedList',
    component: GroupedList,
    tags: ['autodocs'],
} satisfies Meta<typeof GroupedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Actionable: Story = {
    args: {
        items: actionableContacts,
    },
};

export const Static: Story = {
    args: {
        items: staticContacts,
    },
};
