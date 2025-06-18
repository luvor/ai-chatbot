import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: 100,
    availableChatModelIds: ['dify-chat-model', 'chat-model', 'chat-model-reasoning', 'dify-chat-model-reasoning', 'ollama-chat-model', 'dify-chat-podeshevle-model-reasoning'],
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: 1000,
    availableChatModelIds: ['dify-chat-model', 'chat-model', 'chat-model-reasoning', 'dify-chat-model-reasoning', 'ollama-chat-model', 'dify-chat-podeshevle-model-reasoning'],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
