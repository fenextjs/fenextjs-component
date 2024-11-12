import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputCardCCV, InputCardCCVProps } from "./index";

export default {
    title: "Input/Card/InputCardCCV",
    component: InputCardCCV,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputCardCCVProps>> = (args) => (
    <InputCardCCV {...args}>Test Children</InputCardCCV>
);

export const Index = Profile.bind({});
const args  : InputCardCCVProps = {
    
}

Index.args= args
