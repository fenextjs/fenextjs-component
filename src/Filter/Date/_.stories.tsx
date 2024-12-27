import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FilterDate, FilterDateProps } from "./index";
import { Button } from "../../Button";

export default {
    title: "Filter/Date",
    component: FilterDate,
} as Meta;

const Profile: StoryFn<FilterDateProps> = (args) => (
    <FilterDate {...args}>Test Children</FilterDate>
);

export const Index = Profile.bind({});
Index.args = {} as FilterDateProps;


export const MoreBtn = Profile.bind({});
MoreBtn.args = {
    extraListBtn: [
        ({ onConcatData }) => {
            return <>
                <Button
                    onClick={() => {
                        const d = new Date()
                        d.setDate(d.getDate()-1)
                        onConcatData({
                            type: "normal",
                            date:d,
                        });
                    }}
                    size='extra-small'
                >
                    Yesterday
                </Button>
            </>
        },
        ({ onConcatData }) => {
            return <>
                <Button
                    onClick={() => {
                        const d = new Date()
                        d.setDate(d.getDate()+1)
                        onConcatData({
                            type: "normal",
                            date:d,
                        });
                    }}
                    size='extra-small'
                >
                    Tomorrow
                </Button>
            </>
        },
    ]
} as FilterDateProps
