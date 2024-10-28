import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ChatUser, ChatUserProps } from './index';

export default {
    component: ChatUser,
    title: 'Chat/User',
} as Meta;

const ChatUser_: Story<ChatUserProps> = (args) => <ChatUser {...args} />;
export const Index = ChatUser_.bind({});
Index.args = {} as ChatUserProps;
