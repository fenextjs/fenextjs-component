import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputUnitWeight, InputUnitWeightProps } from "./index";

export default {
    title: "Input/InputUnitWeight",
    component: InputUnitWeight,
} as Meta;

const Profile: Story<InputUnitWeightProps> = (args) => (
    <InputUnitWeight {...args}>Test Children</InputUnitWeight>
);

export const Index = Profile.bind({});

const args  : InputUnitWeightProps = {
    label:"Label",
}

Index.args= args
