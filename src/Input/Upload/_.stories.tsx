import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputUpload, InputUploadProps } from "./index";

export default {
    title: "Input/InputUpload",
    component: InputUpload,
} as Meta;

const Profile: Story<PropsWithChildren<InputUploadProps>> = (args) => (
    <InputUpload {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    MAX_SIZE_FILE:100000000000000000
} as InputUploadProps;


export const Error = Profile.bind({});
Error.args = {
    onUploadFile() {
        throw "Error custom"
    },
} as InputUploadProps;


export const CustomPreview = Profile.bind({});
CustomPreview.args = {
   customPreview:(data)=>{
    return <>
        Custom Prview : {data.text}
    </>
   }
} as InputUploadProps;
