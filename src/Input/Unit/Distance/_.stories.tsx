import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputUnitDistance, InputUnitDistanceProps } from "./index";

export default {
    title: "Input/InputUnitDistance",
    component: InputUnitDistance,
} as Meta;

const Profile: Story<InputUnitDistanceProps> = (args) => (
    <InputUnitDistance {...args}>Test Children</InputUnitDistance>
);

export const Index = Profile.bind({});

const args  : InputUnitDistanceProps = {
    label:"Label",
}

Index.args= args
