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
    
}
Index.args = arg
