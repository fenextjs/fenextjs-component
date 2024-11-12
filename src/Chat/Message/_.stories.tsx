import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ChatMessage, ChatMessageProps } from './index';

export default {
    component: ChatMessage,
    title: 'Chat/Message',
} as Meta;

const ChatMessage_: StoryFn<ChatMessageProps> = (args) => <ChatMessage {...args} />;
export const Index = ChatMessage_.bind({});
Index.args = {
    account:{
        email:"email@email.com",
        name:"name"
    },
    id:1,
    message:"message",
    createdAt:new Date()
} as ChatMessageProps;
