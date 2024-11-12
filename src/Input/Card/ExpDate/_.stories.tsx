import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputCardExpDate, InputCardExpDateProps } from "./index";

export default {
    title: "Input/Card/InputCardExpDate",
    component: InputCardExpDate,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputCardExpDateProps>> = (args) => (
    <InputCardExpDate {...args}>Test Children</InputCardExpDate>
);

export const Index = Profile.bind({});
const args  : InputCardExpDateProps = {
    label:"Label",
}

Index.args= args
