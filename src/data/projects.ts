export interface ProjectMetric {
  type: 'positive' | 'neutral';
  key: string;
}

export interface Project {
  id: string;
  index: string;
  domain: string;
  duration: string;
  isCurrent: boolean;
  stack: string[];
  referenceKey: string;
  metrics: ProjectMetric[];
}

export const projects: Project[] = [
  {
    id: 'gradar',
    index: '00 · current',
    domain: 'HR-Tech',
    duration: 'ongoing',
    isCurrent: true,
    stack: ['Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Anthropic / OpenAI'],
    referenceKey: 'refGradar',
    metrics: [
      { type: 'neutral', key: 'laravelReactTs' },
      { type: 'neutral', key: 'llmFeatures' },
    ],
  },
  {
    id: 'binschonda',
    index: '01',
    domain: 'Healthcare',
    duration: '15 months',
    isCurrent: false,
    stack: ['Laravel', 'PHP 8', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Inertia.js', 'Spatie', 'Pest / Vitest / Playwright'],
    referenceKey: 'refBinschonda',
    metrics: [
      { type: 'positive', key: 'apiLatency' },
      { type: 'positive', key: 'devVelocity' },
      { type: 'neutral', key: 'gdpr' },
    ],
  },
  {
    id: 'iuContract',
    index: '02',
    domain: 'EdTech',
    duration: '12 months',
    isCurrent: false,
    stack: ['Laravel', 'PHP 8', 'Vue.js', 'React', 'Kafka', 'PostgreSQL', 'Docker', 'GitLab CI/CD'],
    referenceKey: 'refIuContract',
    metrics: [
      { type: 'positive', key: 'responseTime' },
      { type: 'neutral', key: 'students' },
      { type: 'neutral', key: 'workdaySync' },
    ],
  },
  {
    id: 'iuQa',
    index: '03',
    domain: 'EdTech',
    duration: '12 months',
    isCurrent: false,
    stack: ['Playwright', 'TypeScript', 'Node.js', 'GitLab CI/CD', 'Allure', 'Workday APIs'],
    referenceKey: 'refIuQa',
    metrics: [
      { type: 'positive', key: 'manualQa' },
      { type: 'neutral', key: 'financeCoverage' },
    ],
  },
  {
    id: 'balt',
    index: '04',
    domain: 'IoT / Smart Building',
    duration: '8 months',
    isCurrent: false,
    stack: ['Laravel 9', 'PHP 8', 'Blade', 'InfluxDB', 'Node.js', 'REST APIs'],
    referenceKey: 'refBalt',
    metrics: [
      { type: 'neutral', key: 'sensorPipeline' },
      { type: 'neutral', key: 'fewerSupport' },
    ],
  },
  {
    id: 'parking',
    index: '05',
    domain: 'IoT / MERN',
    duration: '14 months',
    isCurrent: false,
    stack: ['React', 'Express.js', 'Node.js', 'MongoDB', 'REST APIs', 'IoT integration'],
    referenceKey: 'refParking',
    metrics: [
      { type: 'neutral', key: 'realTimeAvailability' },
      { type: 'neutral', key: 'gateIntegration' },
    ],
  },
];
