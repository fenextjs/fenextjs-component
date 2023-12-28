import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ChatMessage, ChatMessageProps } from './index';

export default {
    component: ChatMessage,
    title: 'Chat/Message',
} as Meta;

const ChatMessage_: Story<ChatMessageProps> = (args) => <ChatMessage {...args} />;
export const Primary = ChatMessage_.bind({});
Primary.args = {} as ChatMessageProps;
