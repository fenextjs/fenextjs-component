import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputScannerQr, InputScannerQrProps } from "./index";

export default {
    title: "Input/Scanner/InputScannerQr",
    component: InputScannerQr,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputScannerQrProps>> = (args) => (
    <InputScannerQr {...args}>Test Children</InputScannerQr>
);

export const Index = Profile.bind({});
const args  : InputScannerQrProps = {
    
}

Index.args= args
