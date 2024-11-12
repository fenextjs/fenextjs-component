import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { env_log } from "fenextjs-functions/cjs/env_log";

import { InputRange, InputRangeProps } from "./index";

export default {
    title: "Input/InputRange",
    component: InputRange,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputRangeProps>> = (args) => (
    <InputRange {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    onChange: (e) => {
        env_log(e, {
            name: "onChange",
        });
    },
    onChangeRange: (e) => {
        env_log(e, {
            name: "onChangeRange",
        });
    },
    useRange:false,
    // value:20
    // valueMin:10,
    // valueMax:20
} as InputRangeProps;
