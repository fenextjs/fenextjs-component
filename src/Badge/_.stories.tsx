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

export const completed = Profile.bind({});
completed.args = argsBase;


const argsBasependding: BadgeProps = {
    ...argsBase,
    type: "pendding",
};
export const pendding = Profile.bind({});
pendding.args = argsBasependding;


const argsBaseerror: BadgeProps = {
    ...argsBase,
    type: "error",
};
export const error = Profile.bind({});
error.args = argsBaseerror;


const argsBaseloader: BadgeProps = {
    ...argsBase,
    type: "loader",
};
export const loader = Profile.bind({});
loader.args = argsBaseloader;


const argsBaseprocessed: BadgeProps = {
    ...argsBase,
    type: "processed",
};
export const processed = Profile.bind({});
processed.args = argsBaseprocessed;