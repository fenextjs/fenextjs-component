import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ContentShow, ContentShowProps } from "./index";

export default {
    title: "ContentShow/ContentShow",
    component: ContentShow,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ContentShowProps>> = (args) => (
    <ContentShow {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    children:<>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam ducimus provident perferendis id officia libero voluptas odio. Suscipit ratione distinctio laudantium inventore vero enim deserunt dolores vitae in pariatur!
    </>
} as ContentShowProps;
