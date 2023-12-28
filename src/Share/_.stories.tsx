import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Share, ShareProps } from "./index";

export default {
    title: "Share/Share",
    component: Share,
} as Meta;

const Profile: Story<PropsWithChildren<ShareProps>> = (args) => (
    <Share {...args}/>
);

export const Index = Profile.bind({});
Index.args = {} as ShareProps;
