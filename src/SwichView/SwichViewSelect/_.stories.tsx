import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { SwichViewSelect, SwichViewSelectProps } from "./index";
import { InputSelect } from "../../Input/Select";
import { InputSelectMultiple } from "../../Input/SelectMultiple";

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

const Profile: StoryFn<SwichViewSelectProps> = (args) => (
    <>
        <SwichViewSelect {...args} />
        <InputSelect
            options={t}
            create={{
                id: "create",
                text: "Create",
            }}
            onCreate={() => alert("Create")}
            useSwichtypeSelectStyle={true}
        />
        <SwichViewSelect {...args} />
    </>
);

export const Index = Profile.bind({});
Index.args = {} as SwichViewSelectProps;

const ProfileInterna: StoryFn<SwichViewSelectProps> = (args) => (
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
            useSwichtypeSelectStyle={true}
        />
    </>
);

export const Interna = ProfileInterna.bind({});
Interna.args = {} as SwichViewSelectProps;






const ProfileMultiple: StoryFn<SwichViewSelectProps> = (args) => (
    <>
        <InputSelectMultiple
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
            useSwichtypeSelectStyle={true}
        />
    </>
);

export const Multiple = ProfileMultiple.bind({});
Multiple.args = {} as SwichViewSelectProps;