import React from "react";
import { Story, Meta } from "@storybook/react";

import { SwichViewSelect, SwichViewSelectProps } from "./index";
import { InputSelect } from "../../Input/Select";

export default {
    title: "SwichView/Select",
    component: SwichViewSelect,
} as Meta;

const t = new Array(20).fill(1).map((e, i) => {
    const n = e * i + 1;
    return {
        id: n,
        text: `Option ${n}`,
        children: <>Option {n}</>,
    };
});

const Profile: Story<SwichViewSelectProps> = (args) => (
    <>
        <SwichViewSelect {...args} />
        <InputSelect
            options={t}
            create={{
                id: "create",
                text: "Create",
            }}
            onCreate={() => alert("Create")}
        />
    </>
);

export const Index = Profile.bind({});
Index.args = {} as SwichViewSelectProps;

const ProfileInterna: Story<SwichViewSelectProps> = (args) => (
    <>
        <InputSelect
        label={"Select"}
        placeholder="Select"
            options={t}
            create={{
                id: "create",
                text: "Create",
            }}
            onCreate={() => alert("Create")}
            extraInLabel={
                <>
                    <SwichViewSelect {...args} />
                </>
            }
        />
    </>
);

export const Interna = ProfileInterna.bind({});
Interna.args = {} as SwichViewSelectProps;
