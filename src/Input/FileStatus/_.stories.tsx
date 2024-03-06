import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputFileStatus, InputFileStatusProps } from "./index";

export default {
    title: "Input/InputFileStatus",
    component: InputFileStatus,
} as Meta;

const Profile: Story<PropsWithChildren<InputFileStatusProps>> = (args) => (
    <InputFileStatus {...args}/>
);

export const APPROVED = Profile.bind({});
const argAPPROVED : InputFileStatusProps = {
        onUploadFile:async (e) => {
            await new Promise((r) => setTimeout(r, 2000));
            return {
                ...e,
                status:"APPROVED"
            }
        }
}
APPROVED.args = argAPPROVED


export const PENDING = Profile.bind({});
const argPENDING : InputFileStatusProps = {
        onUploadFile:async (e) => {
            await new Promise((r) => setTimeout(r, 2000));
            return {
                ...e,
                status:"PENDING"
            }
        }
}
PENDING.args = argPENDING



export const REJECTED = Profile.bind({});
const argREJECTED : InputFileStatusProps = {
        onUploadFile:async (e) => {
            await new Promise((r) => setTimeout(r, 2000));
            return {
                ...e,
                status:"REJECTED"
            }
        }
}
REJECTED.args = argREJECTED