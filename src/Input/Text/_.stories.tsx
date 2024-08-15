import React from "react";
import { Story, Meta } from "@storybook/react";
import {  FenextjsValidator } from "fenextjs-validator";

import { InputText, InputTextProps } from "./index";

export default {
    title: "Input/InputText",
    component: InputText,
} as Meta;

const Profile: Story<InputTextProps> = (args) => (
    <InputText {...args}>Test Children</InputText>
);

export const Index = Profile.bind({});

const args  : InputTextProps = {
    label:"Label",
    placeholder:"Placeholder",
}

Index.args= args

export const UseValidator = Profile.bind({});

const UseValidatorArg  : InputTextProps = {
    label:"Label",
    placeholder:"Placeholder",
    validator:FenextjsValidator().isString().isRequired().isMin(4),
    errorWithIsChange:true,
    optional:false
}

UseValidator.args= UseValidatorArg



export const TextArea = Profile.bind({});

const TextAreaArgs  : InputTextProps = {
    label:"Label",
    placeholder:"Placeholder",
    type:"textarea",
    maxLength:100
}

TextArea.args= TextAreaArgs