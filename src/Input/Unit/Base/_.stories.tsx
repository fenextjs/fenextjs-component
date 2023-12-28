import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputUnitBase, InputUnitBaseProps } from "./index";

export default {
    title: "Input/InputUnitBase",
    component: InputUnitBase,
} as Meta;

const Profile: Story<InputUnitBaseProps> = (args) => (
    <InputUnitBase {...args}>Test Children</InputUnitBase>
);

export const Index = Profile.bind({});

const args  : InputUnitBaseProps = {
    label:"Label",
    options:[
        
    ],
}

Index.args= args
