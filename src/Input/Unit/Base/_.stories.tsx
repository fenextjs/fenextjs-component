import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputUnitBase, InputUnitBaseProps } from "./index";

export default {
    title: "Input/InputUnitBase",
    component: InputUnitBase,
} as Meta;

const Profile: StoryFn<InputUnitBaseProps> = (args) => (
    <InputUnitBase {...args}>Test Children</InputUnitBase>
);

export const Index = Profile.bind({});

const args  : InputUnitBaseProps = {
    label:"Label",
    options:[
        
    ],
}

Index.args= args
