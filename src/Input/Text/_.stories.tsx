import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import {  FenextjsValidator } from "fenextjs-validator";

import { InputText, InputTextProps } from "./index";

export default {
    title: "Input/InputText",
    component: InputText,
} as Meta;

const Profile: StoryFn<InputTextProps> = (args) => (
    <InputText {...args}>Test Children</InputText>
);

export const Index = Profile.bind({});

const args  : InputTextProps = {
    id:"target",
    label:"Label",
    placeholder:"Placeholder",
    showFocusInTarget:true
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