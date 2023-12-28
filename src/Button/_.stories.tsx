import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
    title: "Component/Button",
    component: Button,
} as Meta;

const Profile: Story<PropsWithChildren<ButtonProps>> = (args) => (
    <Button {...args}>Test Children</Button>
);

export const Index = Profile.bind({});
Index.args = {};
