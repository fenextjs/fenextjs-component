import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ScheduleDay, ScheduleDayProps } from "./index";

export default {
    title: "Schedule/ScheduleDay",
    component: ScheduleDay,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ScheduleDayProps>> = (args) => (
    <ScheduleDay {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    propsStart:{
        label:"Hora Inicial"
    }
} as ScheduleDayProps;
