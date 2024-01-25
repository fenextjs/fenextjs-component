import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { SwichViewSelect, SwichViewSelectProps } from "./index";
import { InputSelect } from "../../Input/Select";

export default {
    title: "SwichView/Select",
    component: SwichViewSelect,
} as Meta;
interface TestItemSelect {
    id: string;
    name: string;
    date: Date;
    dni: string;
    amount: number;
    quanty: number;
    org: {
        id: string;
        name: string;
    };
}
const Profile: Story<PropsWithChildren<SwichViewSelectProps>> = (args) => (
    <>
        <SwichViewSelect {...args} />
        <InputSelect<TestItemSelect>
            options={new Array(20).fill(1).map((e, i) => {
                const n = e * i + 1;
                return {
                    id: n,
                    text: `Option ${n}`,
                    children: <>Option {n}</>,
                };
            })}
        />
    </>
);

export const Index = Profile.bind({});
Index.args = {} as SwichViewSelectProps;
