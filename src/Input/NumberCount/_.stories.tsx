import React from "react";
import { Story, Meta } from "@storybook/react";
import * as Yup from "yup";
import {  FenextjsValidator } from "fenextjs-validator";

import { InputNumberCount, InputNumberCountProps } from "./index";

export default {
    title: "Input/InputNumberCount",
    component: InputNumberCount,
} as Meta;

const Profile: Story<InputNumberCountProps> = (args) => (
    <InputNumberCount {...args}>Test Children</InputNumberCount>
);

export const Index = Profile.bind({});

const args  : InputNumberCountProps = {
    label:"Label",
    placeholder:"Placeholder",
    yup:Yup.string().required(),
    min:20,
    max:30
}

Index.args= args

export const UseValidator = Profile.bind({});

const UseValidatorArg  : InputNumberCountProps = {
    label:"Label",
    placeholder:"Placeholder",
    validator:FenextjsValidator().isNumber().isRequired().isMin(4)
}

UseValidator.args= UseValidatorArg