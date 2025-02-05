import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { QueryClientProvider, QueryClientProviderProps } from "./index";

export default {
    title: "Component/QueryClientProvider",
    component: QueryClientProvider,
} as Meta;

const Profile: StoryFn<PropsWithChildren<QueryClientProviderProps>> = (args) => (
    <QueryClientProvider {...args} />
);


export const Index = Profile.bind({});
Index.args = {};
