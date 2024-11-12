import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ChatUser, ChatUserProps } from './index';

export default {
    component: ChatUser,
    title: 'Chat/User',
} as Meta;

const ChatUser_: StoryFn<ChatUserProps> = (args) => <ChatUser {...args} />;
export const Index = ChatUser_.bind({});
Index.args = {
    name:"User Name"

} as ChatUserProps;
