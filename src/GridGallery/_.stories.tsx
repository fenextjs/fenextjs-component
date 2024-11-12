import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { GridGallery, GridGalleryProps } from "./index";

export default {
    title: "GridGallery/GridGallery",
    component: GridGallery,
} as Meta;

const Profile: StoryFn<PropsWithChildren<GridGalleryProps>> = (args) => (
    <GridGallery {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    items: [
        <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolore quas explicabo excepturi vel sit numquam placeat iste totam
            dicta quibusdam, ex, quam perferendis delectus voluptatum tenetur
            facere blanditiis necessitatibus?
        </>,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore quas 2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore quas 3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore quas 4",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore quas 5",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore quas 6",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore quas 7",
    ],
} as GridGalleryProps;
