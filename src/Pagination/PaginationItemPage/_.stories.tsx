import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { PaginationItemPageProps, PaginationItemPage } from "./index";

export default {
    title: "Pagination/PaginationItemPage",
    component: PaginationItemPage,
} as Meta;

const Profile: StoryFn<PropsWithChildren<PaginationItemPageProps>> = (args) => (
    <PaginationItemPage {...args}>Test Children</PaginationItemPage>
);

export const Index = Profile.bind({});
const args: PaginationItemPageProps = {
    nItems: 501,
};

Index.args = args;
