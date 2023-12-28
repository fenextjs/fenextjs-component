import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputPassword, InputPasswordProps } from "./index";

export default {
    title: "Input/InputPassword",
    component: InputPassword,
} as Meta;

const Profile: Story<PropsWithChildren<InputPasswordProps>> = (args) => (
    <InputPassword {...args}>Test Children</InputPassword>
);

export const Index = Profile.bind({});
const args  : InputPasswordProps = {
    label:"Label",
    placeholder:"Placeholder",
    iconPos:"right"
}

Index.args= args
