export const DEFAULT_CHAT_MODEL: string = 'dify-chat-model-reasoning';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'dify-chat-model-reasoning',
    name: 'Dify',
    description: 'Chat using Dify application',
  },
  {
    id: 'dify-chat-podeshevle-model-reasoning',
    name: 'Dify Podeshevle',
    description: 'Chat using Dify application',
  },
  {
    id: 'chat-model',
    name: 'XAI',
    description: 'Chat using XAI',
  },
  {
    id: 'chat-model-reasoning',
    name: 'XAI Reasoning',
    description: 'Chat using XAI with reasoning',
  },
];
