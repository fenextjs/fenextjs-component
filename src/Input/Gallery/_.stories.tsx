import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputGallery, InputGalleryProps } from "./index";

export default {
    title: "Input/InputGallery",
    component: InputGallery,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputGalleryProps>> = (args) => (
    <InputGallery {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
} as InputGalleryProps;
