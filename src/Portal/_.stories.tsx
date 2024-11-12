import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Portal, PortalProps } from "./index";

export default {
    title: "Component/Portal",
    component: Portal,
} as Meta;

const Profile: StoryFn<PropsWithChildren<PortalProps>> = (args) => (
    <Portal {...args}>Test Children</Portal>
);

export const Index = Profile.bind({});
Index.args = {};
