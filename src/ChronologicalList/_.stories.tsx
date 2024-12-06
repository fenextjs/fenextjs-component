import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ChronologicalList, ChronologicalListProps } from "./index";

export default {
    title: "ChronologicalList/ChronologicalList",
    component: ChronologicalList,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ChronologicalListProps>> = (args) => (
    <ChronologicalList {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    items: new Array(20).fill(1).map((e, i) => {
        return {
            date: new Date(e * i * 10000000),
            children: <>
                <h3>{"Test " + (i + 1)}</h3>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium rem eaque dolor, expedita, sed excepturi distinctio aspernatur ut, eius necessitatibus facilis molestias hic voluptatibus! Tempora natus culpa saepe dignissimos. 
                </p>
            </>,
            
        };
    }),
} as ChronologicalListProps;


export const CustomDates = Profile.bind({});
CustomDates.args = {
    ...Index.args,
    parseDateYYYYMMDD:(e)=>{
        return <>
            Custom Date YYYYMMDD : {e?.getDate()}/{e?.getMonth()}/{e?.getFullYear()}
        </>
    },
    parseDateHHMMSS:(e)=>{
        return <>
            Custom Date HHMMSS : {e?.getHours()}:{e?.getMinutes()}
        </>
    },
} as ChronologicalListProps;
