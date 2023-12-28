import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";
import {  FenextjsValidator } from "fenextjs-validator";

import { InputNumber, InputNumberProps } from "./index";

export default {
    title: "Input/InputNumber",
    component: InputNumber,
} as Meta;

const Profile: Story<PropsWithChildren<InputNumberProps>> = (args) => (
    <InputNumber {...args}>Test Children</InputNumber>
);

export const Index = Profile.bind({});
const args  : InputNumberProps = {
    label:"Label",
    placeholder:"Placeholder",
}

Index.args= args

export const UseValidator = Profile.bind({});

const UseValidatorArg  : InputNumberProps = {
    label:"Label",
    placeholder:"Placeholder",
    validator:FenextjsValidator().isNumber().isRequired().isMin(4)
}

UseValidator.args= UseValidatorArg