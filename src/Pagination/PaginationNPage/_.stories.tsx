import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { PaginationNPageProps, PaginationNPage } from "./index";

export default {
    title: "Pagination/PaginationNPage",
    component: PaginationNPage,
} as Meta;

const Profile: StoryFn<PropsWithChildren<PaginationNPageProps>> = (args) => (
    <PaginationNPage {...args}>Test Children</PaginationNPage>
);

export const Index = Profile.bind({});
const args: PaginationNPageProps = {
    
};

Index.args = args;
