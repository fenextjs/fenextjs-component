import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputFile, InputFileProps } from "./index";

export default {
    title: "Input/InputFile",
    component: InputFile,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputFileProps>> = (args) => (
    <InputFile {...args}>
        <div style={{fontSize:"4rem"}}>
            Children Input File
        </div>
    </InputFile>
);

export const Index = Profile.bind({});
const arg : InputFileProps = {
    // capture:"user"
}
Index.args = arg

export const Cature = Profile.bind({});
const CatureArg : InputFileProps = {
    capture:"user"
}
Cature.args = CatureArg
