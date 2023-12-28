import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputImg, InputImgProps } from "./index";

export default {
    title: "Input/InputImg",
    component: InputImg,
} as Meta;

const Profile: Story<PropsWithChildren<InputImgProps>> = (args) => (
    <InputImg {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    MAX_SIZE_FILE:100000000000000000
} as InputImgProps;


export const Error = Profile.bind({});
Error.args = {
    onImgFile() {
        throw "Error custom"
    },
} as InputImgProps;
