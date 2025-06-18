import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';

import { createDifyProvider } from 'dify-ai-provider';

import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

const difyProvider = createDifyProvider({
  baseURL: 'http://192.168.1.249/v1',
});

// const ollamaProvider = createOllama({
//   baseURL: 'http://192.168.1.249:11434/api',
// });

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': xai('grok-2-vision-1212'),
        'chat-model-reasoning': wrapLanguageModel({
          model: xai('grok-3-mini-beta'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': xai('grok-2-1212'),
        'artifact-model': xai('grok-2-1212'),
        'dify-chat-model': difyProvider(process.env.DIFY_APP_ID!, {
          responseMode: 'blocking',
          apiKey: process.env.DIFY_API_KEY!,
        }),
        'dify-chat-model-reasoning': wrapLanguageModel({
          model: difyProvider(process.env.DIFY_APP_ID!, {
            responseMode: 'blocking',
            apiKey: process.env.DIFY_API_KEY!,
          }),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'dify-chat-podeshevle-model-reasoning': wrapLanguageModel({
          model: difyProvider(process.env.DIFY_SECOND_APPID!, {
            responseMode: 'blocking',
            apiKey: process.env.DIFY_SECOND_KEY!,
          }),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
      },
      imageModels: {
        'small-model': xai.image('grok-2-image'),
      },
    });
