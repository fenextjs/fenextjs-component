import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Badge, BadgeProps } from "./index";

export default {
    title: "Component/Badge",
    component: Badge,
} as Meta;

const Profile: StoryFn<PropsWithChildren<BadgeProps>> = (args) => (
    <Badge {...args} />
);

const argsBase: BadgeProps = {
    children:
        "Status",
    type: "completed",
};

export const Index = Profile.bind({});
Index.args = argsBase;

export const COMPETED = Profile.bind({});
COMPETED.args = argsBase;


const argsBasependding: BadgeProps = {
    ...argsBase,
    type: "pendding",
};
export const PEDDING = Profile.bind({});
PEDDING.args = argsBasependding;


const argsBaseerror: BadgeProps = {
    ...argsBase,
    type: "error",
};
export const ERROR = Profile.bind({});
ERROR.args = argsBaseerror;


const argsBaseloader: BadgeProps = {
    ...argsBase,
    type: "loader",
};
export const LOADER = Profile.bind({});
LOADER.args = argsBaseloader;


const argsBaseprocessed: BadgeProps = {
    ...argsBase,
    type: "processed",
};
export const PROCESSED = Profile.bind({});
PROCESSED.args = argsBaseprocessed;