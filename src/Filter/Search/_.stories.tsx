import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FilterSearch, FilterSearchProps } from "./index";

export default {
    title: "Filter/Search",
    component: FilterSearch,
} as Meta;

const Profile: StoryFn<FilterSearchProps> = (args) => (
    <div
        // style={{paddingTop:"70dvh"}}
    >
        <FilterSearch {...args}>Test Children</FilterSearch>
    </div>
);

export const Index = Profile.bind({});
Index.args = {} as FilterSearchProps;
