export interface ExpertiseGroup {
  key: string;
  tags: string[];
}

export const expertiseGroups: ExpertiseGroup[] = [
  { key: 'backend', tags: ['Laravel', 'PHP 8', 'Node.js', 'Express.js', 'REST API design', 'Event-driven arch', 'Kafka', 'Clean Architecture'] },
  { key: 'frontend', tags: ['React', 'TypeScript', 'Vue.js', 'Inertia.js', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'SCSS', 'Blade'] },
  { key: 'ai', tags: ['Anthropic Claude API', 'OpenAI API', 'LangChain', 'RAG', 'Prompt engineering'] },
  { key: 'data', tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'InfluxDB', 'Docker', 'GitLab CI/CD'] },
  { key: 'testing', tags: ['Playwright', 'Pest', 'Vitest', 'Allure', 'TDD'] },
  { key: 'ways', tags: ['Agile / Scrum', 'Jira', 'Spatie Roles', 'Workday integration', 'Stakeholder-driven delivery'] },
];
