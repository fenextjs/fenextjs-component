import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ChatFormSendMessage, ChatFormSendMessageProps } from './index';

export default {
    component: ChatFormSendMessage,
    title: 'Chat/ChatFormSendMessage',
} as Meta;

const ChatFormSendMessage_: StoryFn<ChatFormSendMessageProps> = (args) => <ChatFormSendMessage {...args} />;
export const Index = ChatFormSendMessage_.bind({});
Index.args = {} as ChatFormSendMessageProps;
