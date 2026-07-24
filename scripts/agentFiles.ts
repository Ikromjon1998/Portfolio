import { en } from '../src/i18n/en';
import { personal } from '../src/data/personal';
import { projects } from '../src/data/projects';
import { openSourceRepos } from '../src/data/openSource';
import { spokenLanguages } from '../src/data/languages';
import { educationEntries, certifications } from '../src/data/education';
import { expertiseGroups } from '../src/data/expertise';

const SITE_URL = 'https://ikromjon-ochilov.com/';

export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${personal.name} — ${en.record.role}`,
    '',
    `> ${en.meta.description}`,
    '',
    en.cv.summary,
    '',
    `- Location: ${en.record.based} — ${en.record.basedSub}`,
    `- Email: ${personal.email}`,
    `- Website: ${SITE_URL}`,
    `- LinkedIn: ${personal.linkedin}`,
    `- GitHub: ${personal.github}`,
    `- Machine-readable resume (JSON Resume): ${SITE_URL}resume.json`,
    `- Availability: ${en.record.status} — ${en.hero.chip}`,
    '',
    '## Skills',
    '',
    ...expertiseGroups.map(
      (group) => `- ${en.expertise.groups[group.key]}: ${group.tags.join(', ')}`
    ),
    '',
    '## Selected work',
    '',
  ];

  for (const project of projects) {
    const pt = en.work.projects[project.id];
    lines.push(
      `### ${pt.title} (${project.domain}, ${project.duration})`,
      '',
      `${pt.role}`,
      '',
      pt.desc,
      '',
      `- Impact: ${Object.values(pt.metrics).join(' · ')}`,
      `- Stack: ${project.stack.join(', ')}`,
      ''
    );
  }

  lines.push('## Plugins & open source', '');
  for (const repo of openSourceRepos) {
    const item = en.openSource.items[repo.key];
    const demo = 'demo' in repo ? ` Live demo: ${repo.demo}` : '';
    lines.push(`- [${item.title}](${repo.repo}) — ${item.desc}${demo}`);
  }

  lines.push(
    '',
    '## Languages',
    '',
    ...spokenLanguages.map(
      (lang) => `- ${en.languages.names[lang.key]}: ${en.languages.levels[lang.key]}`
    ),
    '',
    '## Education & certifications',
    ''
  );
  for (const entry of educationEntries) {
    const et = en.education.entries[entry.key];
    lines.push(`- ${et.year} — ${et.degree}, ${et.institution}`);
  }
  lines.push(`- Certifications: ${certifications.map((c) => en.education.certs[c]).join(', ')}`);
  lines.push('');

  return lines.join('\n');
}

export function buildResumeJson(): string {
  const resume = {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: personal.name,
      label: `${en.record.role} · ${en.record.roleSub}`,
      email: personal.email,
      url: SITE_URL,
      summary: en.cv.summary,
      location: { city: 'Berlin', countryCode: 'DE' },
      profiles: [
        { network: 'LinkedIn', username: personal.linkedinHandle, url: personal.linkedin },
        { network: 'GitHub', username: personal.githubHandle, url: personal.github },
      ],
    },
    projects: [
      ...projects.map((project) => {
        const pt = en.work.projects[project.id];
        return {
          name: pt.title,
          description: pt.desc,
          entity: project.domain,
          roles: [pt.role],
          highlights: Object.values(pt.metrics),
          keywords: [...project.stack],
        };
      }),
      ...openSourceRepos.map((repo) => {
        const item = en.openSource.items[repo.key];
        return {
          name: item.title,
          description: item.desc,
          url: repo.repo,
          keywords: [...repo.tags],
        };
      }),
    ],
    skills: expertiseGroups.map((group) => ({
      name: en.expertise.groups[group.key],
      keywords: [...group.tags],
    })),
    languages: spokenLanguages.map((lang) => ({
      language: en.languages.names[lang.key],
      fluency: en.languages.levels[lang.key],
    })),
    education: educationEntries.map((entry) => {
      const et = en.education.entries[entry.key];
      return { institution: et.institution, area: et.degree };
    }),
    certificates: certifications.map((cert) => ({ name: en.education.certs[cert] })),
  };

  return JSON.stringify(resume, null, 2) + '\n';
}
