import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Notification, NotificationProps } from "./index";
import { RequestResultTypeProps } from "fenextjs-interface/cjs/Request";

export default {
    title: "Notification/Notification",
    component: Notification,
} as Meta;

const Profile: Story<PropsWithChildren<NotificationProps>> = (args) => (
    <Notification {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    children: "Text of Message",
    type: RequestResultTypeProps.NORMAL,
} as NotificationProps;

export const ERROR = Profile.bind({});
ERROR.args = {
    children: "Text of Message",
    type: RequestResultTypeProps.ERROR,
} as NotificationProps;

export const OK = Profile.bind({});
OK.args = {
    children: "Text of Message",
    type: RequestResultTypeProps.OK,
} as NotificationProps;

export const WARNING = Profile.bind({});
WARNING.args = {
    children: "Text of Message",
    type: RequestResultTypeProps.WARNING,
} as NotificationProps;
