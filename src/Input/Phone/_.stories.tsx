import React from "react";
import { Story, Meta } from "@storybook/react";
import {  FenextjsValidator } from "fenextjs-validator";

import { InputPhone, InputPhoneProps } from "./index";

export default {
    title: "Input/InputPhone",
    component: InputPhone,
} as Meta;

const Profile: Story<InputPhoneProps> = (args) => (
    <InputPhone {...args}>Test Children</InputPhone>
);

export const Index = Profile.bind({});

const args  : InputPhoneProps = {
    label:"Label",
}

Index.args= args

export const UseValidator = Profile.bind({});

const UseValidatorArg  : InputPhoneProps = {
    label:"Label",
    placeholder:"Placeholder",
    validator:FenextjsValidator().setName("phone").isObject({
        code:FenextjsValidator().isString().isRequired(),
        number:FenextjsValidator().isString().isRequired().isMinOrEqual(9),
    })
}

UseValidator.args= UseValidatorArg