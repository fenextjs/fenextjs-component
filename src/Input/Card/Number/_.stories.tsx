import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputCardNumber, InputCardNumberProps } from "./index";

export default {
    title: "Input/Card/InputCardNumber",
    component: InputCardNumber,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputCardNumberProps>> = (args) => (
    <InputCardNumber {...args}>Test Children</InputCardNumber>
);

export const Index = Profile.bind({});
const args  : InputCardNumberProps = {
    label:"Label",
    placeholder:"Placeholder",
}

Index.args= args
