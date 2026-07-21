export const personal = {
  name: 'Ikromjon Ochilov',
  email: 'ikromjon98.98@icloud.com',
  linkedin: 'https://www.linkedin.com/in/ikromjon-ochilov-045560182/',
  linkedinHandle: 'in/ikromjon-ochilov',
  github: 'https://github.com/Ikromjon1998',
  githubHandle: 'github.com/Ikromjon1998',
  coreTags: ['Laravel', 'PHP 8', 'React', 'TypeScript', 'PostgreSQL'],
  aiTags: ['Claude API', 'OpenAI', 'LangChain', 'RAG'],
  stats: [
    { value: '6', suffix: '+', key: 'stat1' },
    { value: '6', suffix: '', key: 'stat2' },
    { value: '100k', suffix: '+', key: 'stat3' },
    { value: '40', suffix: '%', key: 'stat4' },
  ],
} as const;

export type StatKey = (typeof personal.stats)[number]['key'];
