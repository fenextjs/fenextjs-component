import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { ContentLoading, ContentLoadingProps } from "./index";

export default {
    title: "ContentLoading/ContentLoading",
    component: ContentLoading,
} as Meta;

const Profile: Story<PropsWithChildren<ContentLoadingProps>> = (args) => (
    <ContentLoading {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    loader :true,
    children:<>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam eligendi ullam, quo autem porro hic eius repudiandae, officia numquam corrupti id nostrum aliquam nulla necessitatibus, iusto illum quam vero sun!
    </>
} as ContentLoadingProps;
