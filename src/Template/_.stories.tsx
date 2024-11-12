import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Template, TemplateProps } from "./index";

export default {
    title: "Template/Template",
    component: Template,
} as Meta;

const Profile: StoryFn<PropsWithChildren<TemplateProps>> = (args) => (
    <Template {...args}/>
);

export const Index = Profile.bind({});
const args : TemplateProps = {}
Index.args = args
