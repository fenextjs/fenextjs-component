import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputScannerTextQr, InputScannerTextQrProps } from "./index";

export default {
    title: "Input/Scanner/InputScannerTextQr",
    component: InputScannerTextQr,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputScannerTextQrProps>> = (args) => (
    <InputScannerTextQr {...args}>Test Children</InputScannerTextQr>
);

export const Index = Profile.bind({});
const args  : InputScannerTextQrProps = {
    
}

Index.args= args
