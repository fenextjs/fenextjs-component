import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Tab, TabProps } from "./index";

export default {
    title: "Component/Tab",
    component: Tab,
} as Meta;

const Profile: Story<PropsWithChildren<TabProps>> = (args) => (
    <Tab {...args}>Test Children</Tab>
);

export const Index = Profile.bind({});
const args: TabProps = {
    beforeTabs:"Name Tabs",
    afterTabs:"Total Items 3",
    // useCount:true,
    items: [
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        // {
        //     id: "1",
        //     head: "Head 1",
        //     singular:"Head",
        //     plural:"Heads",
        //     count:1244,
        //     body: (
        //         <>
        //             <h1>Lorem 1</h1>
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        //             Perferendis tempora, accusamus laudantium nemo accusantium
        //             repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
        //             veritatis veniam deleniti debitis omnis illo. Quidem,
        //             molestias!
        //         </>
        //     ),
        //     useCount:true
        // },
        {
            id: "1",
            head: "Head 1",
            singular:"Head",
            plural:"Heads",
            count:1244,
            body: (
                <>
                    <h1>Lorem 1</h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis tempora, accusamus laudantium nemo accusantium
                    repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
                    veritatis veniam deleniti debitis omnis illo. Quidem,
                    molestias!
                </>
            ),
            useCount:true
        },
        {
            id: "2",
            head: "Head 2",
            singular:"Head",
            plural:"Heads",
            count:1244,
            body: (
                <>
                    <h1>Lorem 2</h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis tempora, accusamus laudantium nemo accusantium
                    repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
                    veritatis veniam deleniti debitis omnis illo. Quidem,
                    molestias!
                </>
            ),
            afterTab:<>
                afterTab2
            </>,
            beforeTab:<>
                beforeTab2
            </>
        },
        {
            id: "3",
            head: "Head 3",
            singular:"Head",
            plural:"Heads",
            count:1,
            body: (
                <>
                    <h1>Lorem 3</h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis tempora, accusamus laudantium nemo accusantium
                    repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
                    veritatis veniam deleniti debitis omnis illo. Quidem,
                    molestias!
                </>
            ),
        },
    ],
    // _t:(e)=>{
    //     if(e=="Head"){
    //         return "______Head_____"
    //     }
    //     if(e=="Heads"){
    //         return "--------Head-----"
    //     }
    //     return e
    // }
};

Index.args = args;

export const OneTab = Profile.bind({});
const OneTabargs: TabProps = {
    beforeTabs:"Name Tabs",
    afterTabs:"Total Items 3",
    validataTabOneHiddenHeader:true,
    items: [
        {
            id: "1",
            head: "Head 1",
            body: (
                <>
                    <h1>Lorem 1</h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis tempora, accusamus laudantium nemo accusantium
                    repudiandae ipsa sapiente explicabo nobis ducimus quod quasi
                    veritatis veniam deleniti debitis omnis illo. Quidem,
                    molestias!
                </>
            ),
        },
    ],
};

OneTab.args = OneTabargs;