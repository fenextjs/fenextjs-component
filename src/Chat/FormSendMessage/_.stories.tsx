import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ChatFormSendMessage, ChatFormSendMessageProps } from './index';

export default {
    component: ChatFormSendMessage,
    title: 'Chat/ChatFormSendMessage',
} as Meta;

const ChatFormSendMessage_: Story<ChatFormSendMessageProps> = (args) => <ChatFormSendMessage {...args} />;
export const Index = ChatFormSendMessage_.bind({});
Index.args = {} as ChatFormSendMessageProps;
