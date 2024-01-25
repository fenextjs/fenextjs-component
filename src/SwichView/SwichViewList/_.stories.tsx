import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { SwichViewList, SwichViewListProps } from "./index";

export default {
    title: "SwichView/List",
    component: SwichViewList,
} as Meta;
const Profile: Story<PropsWithChildren<SwichViewListProps<any>>> = (args) => (
    <>
        <SwichViewList {...args} />
    </>
);

export const Index = Profile.bind({});
Index.args = {} as SwichViewListProps<any>;
