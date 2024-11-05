import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputFileStatus, InputFileStatusProps } from "./index";
import { sleep } from "fenextjs-functions";

export default {
    title: "Input/InputFileStatus",
    component: InputFileStatus,
} as Meta;

const Profile: Story<PropsWithChildren<InputFileStatusProps>> = (args) => (
    <InputFileStatus {...args}/>
);

export const Index = Profile.bind({});
const argAPPROVED : InputFileStatusProps = {
        onUploadFile:async (e) => {
            await sleep(2000)
            return {
                ...e,
                status:"APPROVED"
            }
        }
}
Index.args = argAPPROVED

export const APPROVED = Profile.bind({});
APPROVED.args = argAPPROVED

export const PENDING = Profile.bind({});
const argPENDING : InputFileStatusProps = {
        onUploadFile:async (e) => {
            await sleep(2000)
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
            await sleep(2000)
            return {
                ...e,
                status:"REJECTED"
            }
        }
}
REJECTED.args = argREJECTED