import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Form, FormProps } from "./index";

export default {
    title: "Component/Form",
    component: Form,
} as Meta;

const Profile: Story<PropsWithChildren<FormProps>> = (args) => (
    <Form {...args}>Test Children</Form>
);

export const Index = Profile.bind({});
Index.args = {};
