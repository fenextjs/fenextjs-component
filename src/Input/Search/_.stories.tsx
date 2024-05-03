import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputSearch, InputSearchProps, InputSearchResultProps, InputSearchTabFilterProps } from "./index";
import { env_log } from "fenextjs-functions/cjs/env_log";
import { sleep } from "fenextjs-functions";

export default {
    title: "Input/InputSearch",
    component: InputSearch,
} as Meta;

const listSearch: InputSearchResultProps[] = [
    {
        id: "Item 1",
        text: "Item 1",
        content: (
            <>
                <h3>Title 1</h3>
                <hr />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit, asperiores nostrum atque consequatur iusto expedita
                    repudiandae deleniti mollitia suscipit vel blanditiis
                    architecto esse pariatur vero a. Deleniti magni consequuntur
                    esse.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit, asperiores nostrum atque consequatur iusto expedita
                    repudiandae deleniti mollitia suscipit vel blanditiis
                    architecto esse pariatur vero a. Deleniti magni consequuntur
                    esse.
                </p>
            </>
        ),
    },
    {
        id: "Item 2",
        text: "Item 2",
        content: (
            <>
                <h3>Title 2</h3>
                <hr />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit, asperiores nostrum atque consequatur iusto expedita
                    repudiandae deleniti mollitia suscipit vel blanditiis
                    architecto esse pariatur vero a. Deleniti magni consequuntur
                    esse.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit, asperiores nostrum atque consequatur iusto expedita
                    repudiandae deleniti mollitia suscipit vel blanditiis
                    architecto esse pariatur vero a. Deleniti magni consequuntur
                    esse.
                </p>
            </>
        ),
    },
    {
        id: "Item 3",
        text: "Item 3",
        content: (
            <>
                <h3>Title 3</h3>
                <hr />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit, asperiores nostrum atque consequatur iusto expedita
                    repudiandae deleniti mollitia suscipit vel blanditiis
                    architecto esse pariatur vero a. Deleniti magni consequuntur
                    esse.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit, asperiores nostrum atque consequatur iusto expedita
                    repudiandae deleniti mollitia suscipit vel blanditiis
                    architecto esse pariatur vero a. Deleniti magni consequuntur
                    esse.
                </p>
            </>
        ),
    },
    {
        id: "Item not content",
        text: "Item not content",
    },
];

const Profile: Story<PropsWithChildren<InputSearchProps>> = (args) => (
    <InputSearch {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    onSearch: async (a:string,tabFilter?: InputSearchTabFilterProps[]) => {
        await sleep(500)
        if(tabFilter?.find(e=>e.id == "tab1")){
            return[
                {
                    id: "tab 1",
                    text: "tab 1",
                    content: (
                        <>
                            <h3>Tab 1</h3>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Impedit, asperiores nostrum atque consequatur iusto expedita
                                repudiandae deleniti mollitia suscipit vel blanditiis
                                architecto esse pariatur vero a. Deleniti magni consequuntur
                                esse.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Impedit, asperiores nostrum atque consequatur iusto expedita
                                repudiandae deleniti mollitia suscipit vel blanditiis
                                architecto esse pariatur vero a. Deleniti magni consequuntur
                                esse.
                            </p>
                        </>
                    ),
                },
            ];
        }
        if(tabFilter?.find(e=>e.id == "tab2")){
            return[]
        }
        return listSearch.filter((e) =>
            e.text.toLowerCase().includes(a.toLowerCase()),
        );
    },
    onClickSearch: (e) => {
        env_log(e);
    },
    // resultList:listSearch,
    useResult: true,
    useSearchFixed: true,
    useTabFilter: true,
    listTabFilter: [
        {
            id: "tab1",
            text: "tab1",
        },
        {
            id: "tab2",
            text: "tab2",
        },
        {
            id: "tab3",
            text: "tab3",
        },
        {
            id: "tab4",
            text: "tab4",
        },
        {
            id: "tab5",
            text: "tab5",
        },
    ],
    label:"Search",
    useLoadMore:true,
    onLoadMore:()=>{
        
    }
} as InputSearchProps;
