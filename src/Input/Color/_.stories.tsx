import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputColor, InputColorProps } from "./index";

export default {
    title: "Input/InputColor",
    component: InputColor,
} as Meta;

const Profile: Story<InputColorProps> = (args) => (
    <InputColor {...args}>Test Children</InputColor>
);

export const Index = Profile.bind({});

const args  : InputColorProps = {
    
}

Index.args= args
