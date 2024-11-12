import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputGoogleLoadScript, InputGoogleLoadScriptProps } from "./index";

export default {
    title: "Input/Google/LoadScript",
    component: InputGoogleLoadScript,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputGoogleLoadScriptProps>> = (args) => (
    <InputGoogleLoadScript {...args}/>
);

export const Index = Profile.bind({});
Index.args = {} as InputGoogleLoadScriptProps;
