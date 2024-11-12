import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";
import {Button} from '../Button';

import { TableActionCheckbox, TableActionCheckboxProps } from "./index";

export default {
    title: "Table/TableActionCheckbox",
    component: TableActionCheckbox,
} as Meta;

const Profile: StoryFn<PropsWithChildren<TableActionCheckboxProps<any>>> = (
    args,
) => <TableActionCheckbox {...args} />;

export const Index = Profile.bind({});
const args: TableActionCheckboxProps<any> = {
    actions:[
        () => <Button size="extra-small">Delete</Button>,
        () => <Button size="extra-small">Edit</Button>
    ]
};
Index.args = args;
