import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Alert, AlertComponentProps } from "./index";

export default {
    title: "Component/Alert",
    component: Alert,
} as Meta;

const Profile: StoryFn<PropsWithChildren<AlertComponentProps>> = (args) => (
    <Alert {...args} />
);

const argsBase: AlertComponentProps = {
    message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ullam voluptatum dignissimos deserunt quasi nihil",
    type: "OK",
};

const argsBaseNORMAL: AlertComponentProps = {
    ...argsBase,
    type: "NORMAL",
};

export const Index = Profile.bind({});
Index.args = argsBaseNORMAL;

export const NORMAL = Profile.bind({});
NORMAL.args = argsBaseNORMAL;

const argsBaseOK: AlertComponentProps = {
    ...argsBase,
};
export const OK = Profile.bind({});
OK.args = argsBaseOK;

const argsBaseERROR: AlertComponentProps = {
    ...argsBase,
    type: "ERROR",
};
export const ERROR = Profile.bind({});
ERROR.args = argsBaseERROR;


const argsBaseWARNING: AlertComponentProps = {
    ...argsBase,
    type: "WARNING",
};
export const WARNING = Profile.bind({});
WARNING.args = argsBaseWARNING;
