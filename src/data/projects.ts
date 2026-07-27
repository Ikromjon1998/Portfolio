export type MetricTrend = 'up' | 'down' | 'neutral';

interface ProjectMetricShape {
  id: string;
  trend: MetricTrend;
}

interface ProjectShape {
  id: string;
  index: string;
  domain: string;
  duration: string;
  stack: readonly string[];
  referenceKey: string;
  metrics: readonly ProjectMetricShape[];
}

export const projects = [
  {
    id: 'gradar',
    index: '00 · current',
    domain: 'HR-Tech',
    duration: 'ongoing',
    stack: ['Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Anthropic / OpenAI'],
    referenceKey: 'refGradar',
    metrics: [
      { id: 'laravelReactTs', trend: 'neutral' },
      { id: 'llmFeatures', trend: 'neutral' },
    ],
  },
  {
    id: 'portfolio',
    index: '01 · personal',
    domain: 'AI / Open source',
    duration: 'ongoing',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Netlify Functions',
      'Anthropic Claude API',
      'Playwright',
      'Vitest',
    ],
    referenceKey: 'refPortfolio',
    metrics: [
      { id: 'cvChat', trend: 'neutral' },
      { id: 'a11yCi', trend: 'neutral' },
      { id: 'openSourceRepo', trend: 'neutral' },
    ],
  },
  {
    id: 'binschonda',
    index: '02',
    domain: 'Healthcare',
    duration: '15 months',
    stack: [
      'Laravel',
      'PHP 8',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'Inertia.js',
      'Spatie',
      'Pest / Vitest / Playwright',
    ],
    referenceKey: 'refBinschonda',
    metrics: [
      { id: 'apiLatency', trend: 'up' },
      { id: 'devVelocity', trend: 'up' },
      { id: 'gdpr', trend: 'neutral' },
    ],
  },
  {
    id: 'iuContract',
    index: '03',
    domain: 'EdTech',
    duration: '12 months',
    stack: ['Laravel', 'PHP 8', 'Vue.js', 'React', 'Kafka', 'PostgreSQL', 'Docker', 'GitLab CI/CD'],
    referenceKey: 'refIuContract',
    metrics: [
      { id: 'responseTime', trend: 'up' },
      { id: 'students', trend: 'neutral' },
      { id: 'workdaySync', trend: 'neutral' },
    ],
  },
  {
    id: 'iuQa',
    index: '04',
    domain: 'EdTech',
    duration: '12 months',
    stack: ['Playwright', 'TypeScript', 'Node.js', 'GitLab CI/CD', 'Allure', 'Workday APIs'],
    referenceKey: 'refIuQa',
    metrics: [
      { id: 'manualQa', trend: 'down' },
      { id: 'financeCoverage', trend: 'neutral' },
    ],
  },
  {
    id: 'balt',
    index: '05',
    domain: 'IoT / Smart Building',
    duration: '8 months',
    stack: ['Laravel 9', 'PHP 8', 'Blade', 'InfluxDB', 'Node.js', 'REST APIs'],
    referenceKey: 'refBalt',
    metrics: [
      { id: 'sensorPipeline', trend: 'neutral' },
      { id: 'fewerSupport', trend: 'neutral' },
    ],
  },
  {
    id: 'parking',
    index: '06',
    domain: 'IoT / MERN',
    duration: '14 months',
    stack: ['React', 'Express.js', 'Node.js', 'MongoDB', 'REST APIs', 'IoT integration'],
    referenceKey: 'refParking',
    metrics: [
      { id: 'realTimeAvailability', trend: 'neutral' },
      { id: 'gateIntegration', trend: 'neutral' },
    ],
  },
] as const satisfies readonly ProjectShape[];

export type Project = (typeof projects)[number];
export type ProjectId = Project['id'];
export type ReferenceKey = Project['referenceKey'];
export type MetricId = Project['metrics'][number]['id'];
export type MetricIdOf<P extends ProjectId> = Extract<Project, { id: P }>['metrics'][number]['id'];
