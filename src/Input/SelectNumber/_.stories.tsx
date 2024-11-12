import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputSelectNumber, InputSelectNumberProps } from "./index";

export default {
    title: "Input/InputSelectNumber",
    component: InputSelectNumber,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputSelectNumberProps>> = (args) => (
    <InputSelectNumber {...args}>Test Children</InputSelectNumber>
);

export const Index = Profile.bind({});
const args  : InputSelectNumberProps = {
    label:"Label",
    placeholder:"Placeholder",
}

Index.args= args

export const UseValidator = Profile.bind({});

const UseValidatorArg  : InputSelectNumberProps = {
    label:"Label",
    placeholder:"Placeholder",
}

UseValidator.args= UseValidatorArg