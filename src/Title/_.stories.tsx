import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Title, TitleProps } from "./index";

export default {
    title: "Title/Title",
    component: Title,
} as Meta;

const Profile: Story<PropsWithChildren<TitleProps>> = (args) => (
    <Title {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    tag: "h1",
    children: "Title h1",
} as TitleProps;

export const H1 = Profile.bind({});
H1.args = {
    tag: "h1",
    children: "Title h1",
} as TitleProps;

export const H2 = Profile.bind({});
H2.args = {
    tag: "h2",
    children: "Title h2",
} as TitleProps;

export const H3 = Profile.bind({});
H3.args = {
    tag: "h3",
    children: "Title h3",
} as TitleProps;

export const H4 = Profile.bind({});
H4.args = {
    tag: "h4",
    children: "Title h4",
} as TitleProps;

export const H5 = Profile.bind({});
H5.args = {
    tag: "h5",
    children: "Title h5",
} as TitleProps;

export const H6 = Profile.bind({});
H6.args = {
    tag: "h6",
    children: "Title h6",
} as TitleProps;
