import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { PageProgress, PageProgressProps } from "./index";

export default {
    title: "PageProgress/PageProgress",
    component: PageProgress,
} as Meta;

const Profile: StoryFn<PropsWithChildren<PageProgressProps>> = (args) => (
    <PageProgress {...args}/>
);

export const Index = Profile.bind({});
Index.args = {} as PageProgressProps;
