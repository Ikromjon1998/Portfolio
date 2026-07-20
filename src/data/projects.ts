export type MetricTrend = 'up' | 'down' | 'neutral';

export interface ProjectMetric {
  /** Stable id used to look up the localized label in the translation files. */
  id: string;
  /** Direction of the impact arrow; `neutral` renders no arrow. */
  trend: MetricTrend;
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
      { id: 'laravelReactTs', trend: 'neutral' },
      { id: 'llmFeatures', trend: 'neutral' },
    ],
  },
  {
    id: 'binschonda',
    index: '01',
    domain: 'Healthcare',
    duration: '15 months',
    isCurrent: false,
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
    index: '02',
    domain: 'EdTech',
    duration: '12 months',
    isCurrent: false,
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
    index: '03',
    domain: 'EdTech',
    duration: '12 months',
    isCurrent: false,
    stack: ['Playwright', 'TypeScript', 'Node.js', 'GitLab CI/CD', 'Allure', 'Workday APIs'],
    referenceKey: 'refIuQa',
    metrics: [
      { id: 'manualQa', trend: 'down' },
      { id: 'financeCoverage', trend: 'neutral' },
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
      { id: 'sensorPipeline', trend: 'neutral' },
      { id: 'fewerSupport', trend: 'neutral' },
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
      { id: 'realTimeAvailability', trend: 'neutral' },
      { id: 'gateIntegration', trend: 'neutral' },
    ],
  },
];
