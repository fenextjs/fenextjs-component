import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Box, BoxProps } from "./index";

export default {
    title: "Box/Box",
    component: Box,
} as Meta;

const Profile: StoryFn<PropsWithChildren<BoxProps>> = (args) => (
    <Box {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    children:<>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic sapiente praesentium qui omnis sunt nobis voluptatem quibusdam explicabo, aliquam voluptates magnam accusamus eveniet incidunt, quos obcaecati ut perspiciatis mollitia!
    </>
} as BoxProps;
