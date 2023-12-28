import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputUnitVolumen, InputUnitVolumenProps } from "./index";

export default {
    title: "Input/InputUnitVolumen",
    component: InputUnitVolumen,
} as Meta;

const Profile: Story<InputUnitVolumenProps> = (args) => (
    <InputUnitVolumen {...args}>Test Children</InputUnitVolumen>
);

export const Index = Profile.bind({});

const args  : InputUnitVolumenProps = {
    label:"Label",
}

Index.args= args
