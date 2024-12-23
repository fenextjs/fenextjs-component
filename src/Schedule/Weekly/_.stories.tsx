import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ScheduleWeekly, ScheduleWeeklyProps } from "./index";

export default {
    title: "Schedule/ScheduleWeekly",
    component: ScheduleWeekly,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ScheduleWeeklyProps>> = (args) => (
    <ScheduleWeekly {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    
    // propsStart:{
    //     label:"Hora Inicial"
    // },
    // propsEnd:{
    //     label:"Hora Final"
    // },

    // ButtonProps:{
    //     children:"Agregar Horario"
    // },
    // onParseHeaderDay:()=>"hola"
} as ScheduleWeeklyProps;
