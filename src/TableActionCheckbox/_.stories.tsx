import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { TableActionCheckbox, TableActionCheckboxProps } from "./index";

export default {
    title: "Table/TableActionCheckbox",
    component: TableActionCheckbox,
} as Meta;

const Profile: Story<PropsWithChildren<TableActionCheckboxProps<any>>> = (
    args,
) => <TableActionCheckbox {...args} />;

export const Index = Profile.bind({});
const args: TableActionCheckboxProps<any> = {
    actions:[
        () => <button>Delete</button>,
        () => <button>Edit</button>
    ]
};
Index.args = args;
