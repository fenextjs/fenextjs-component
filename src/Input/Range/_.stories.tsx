import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";
import { env_log } from "fenextjs-functions/cjs/env_log";

import { InputRange, InputRangeProps } from "./index";

export default {
    title: "Input/InputRange",
    component: InputRange,
} as Meta;

const Profile: Story<PropsWithChildren<InputRangeProps>> = (args) => (
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
} as InputRangeProps;
