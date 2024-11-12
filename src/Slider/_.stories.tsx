import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Slider, SliderProps } from "./index";

export default {
    title: "Slider/Slider",
    component: Slider,
} as Meta;

const Profile: StoryFn<PropsWithChildren<SliderProps>> = (args) => (
    <Slider {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    timeDelay:1000,
    items: [
        <>
            <h1>Item 1</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quos porro soluta aliquam cumque beatae aut architecto sint?
                Dicta libero quis eligendi ipsam officia dolore ea maiores iste
                ut consequuntur!
            </p>
        </>,
        <>
            <h1>Item 2</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quos porro soluta aliquam cumque beatae aut architecto sint?
                Dicta libero quis eligendi ipsam officia dolore ea maiores iste
                ut consequuntur!
            </p>
        </>,
        <>
            <h1>Item 3</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quos porro soluta aliquam cumque beatae aut architecto sint?
                Dicta libero quis eligendi ipsam officia dolore ea maiores iste
                ut consequuntur!
            </p>
        </>,
        <>
            <h1>Item 4</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quos porro soluta aliquam cumque beatae aut architecto sint?
                Dicta libero quis eligendi ipsam officia dolore ea maiores iste
                ut consequuntur!
            </p>
        </>,
        <>
            <h1>Item 5</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quos porro soluta aliquam cumque beatae aut architecto sint?
                Dicta libero quis eligendi ipsam officia dolore ea maiores iste
                ut consequuntur!
            </p>
        </>,
        <>
            <h1>Item 6</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quos porro soluta aliquam cumque beatae aut architecto sint?
                Dicta libero quis eligendi ipsam officia dolore ea maiores iste
                ut consequuntur!
            </p>
        </>,
    ],
} as SliderProps;
