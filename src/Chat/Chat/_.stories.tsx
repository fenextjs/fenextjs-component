import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Chat, ChatProps } from "./index";
import { UserProps} from "fenextjs-interface";

export default {
    component: Chat,
    title: "Chat/Chat",
} as Meta;

const Chat_: StoryFn<ChatProps> = (args) => <Chat {...args} />;

const User1: Partial<UserProps> = {
    id: "1",
    dateCreate: new Date(2000, 0, 0, 0, 0, 0),
    email: "user1@user1.com",
    name: "user1",
};
const User2: Partial<UserProps> = {
    id: "1",
    dateCreate: new Date(2000, 0, 0, 0, 0, 0),
    email: "user2@user2.com",
    name: "user2",
};

export const Index = Chat_.bind({});
Index.args = {
    chatFormSendMessage: {},
    chatMessage: new Array(20).fill(1).map((ele, i) => {
        return {
            id: `${i * ele}`,
            account: i % 2 == 0 ? User1 : User2,
            right: i % 2 == 0,
            createdAt: new Date(2000 + i,0,0,0),
            message: (
                <>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti velit vero aut, accusantium soluta voluptas, nisi
                    sunt repudiandae perferendis porro id deserunt cupiditate
                    quasi iste provident minima quae nostrum consequatur!
                </>
            ),
        };
    }),
    chatUser: [
        User1,
        User2
    ],
} as ChatProps;
