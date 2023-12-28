import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { PaginationProps, Pagination } from "./index";

export default {
    title: "Pagination/Pagination",
    component: Pagination,
} as Meta;

const Profile: Story<PropsWithChildren<PaginationProps>> = (args) => (
    <Pagination {...args}>Test Children</Pagination>
);

export const Index = Profile.bind({});
const args: PaginationProps = {
    nItems:150,
};

Index.args = args;
