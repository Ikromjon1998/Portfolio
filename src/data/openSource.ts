interface OpenSourceRepoShape {
  /** Key into the localized `openSource.items` map. */
  key: string;
  repo: string;
  demo?: string;
  tags: readonly string[];
}

export const openSourceRepos = [
  {
    key: 'nativeNotifications',
    repo: 'https://github.com/Ikromjon1998/nativephp-mobile-local-notifications',
    tags: ['PHP', 'NativePHP Mobile', 'Plugin'],
  },
  {
    key: 'nativeScanner',
    repo: 'https://github.com/Ikromjon1998/nativephp-mobile-document-scanner',
    tags: ['PHP', 'NativePHP Mobile', 'Native camera APIs'],
  },
  {
    key: 'vocabAssistant',
    repo: 'https://github.com/Ikromjon1998/german-vocab-assistant',
    demo: 'https://german-vocab-assistant.vercel.app',
    tags: ['TypeScript', 'AI / LLM'],
  },
  {
    key: 'licensePlates',
    repo: 'https://github.com/Ikromjon1998/laravel-german-license-plate-validation',
    tags: ['Laravel', 'Composer package'],
  },
] as const satisfies readonly OpenSourceRepoShape[];

export type OpenSourceKey = (typeof openSourceRepos)[number]['key'];
