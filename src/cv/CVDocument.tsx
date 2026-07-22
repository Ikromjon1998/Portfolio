import { Document, Page, View, Text, Link } from '@react-pdf/renderer';
import './fonts';
import type { Locale, Translations } from '../i18n/types';
import { getProjectTranslation, getTranslations } from '../i18n/useTranslation';
import { personal } from '../data/personal';
import { projects } from '../data/projects';
import { expertiseGroups } from '../data/expertise';
import { openSourceRepos } from '../data/openSource';
import { spokenLanguages } from '../data/languages';
import { educationEntries, certifications } from '../data/education';
import { styles as s } from './styles';

function CVHeader({ t }: { t: Translations }) {
  return (
    <View style={s.header}>
      <Text style={s.name}>{personal.name}</Text>
      <View style={s.titleRow}>
        <Text style={s.subtitle}>
          {t.record.role} · {t.record.roleSub}
        </Text>
        <Text style={s.subtitle}>{t.record.based}</Text>
      </View>
      <View style={s.contactRow}>
        <Link src={`mailto:${personal.email}`} style={[s.contactItem, s.contactLink]}>
          {personal.email}
        </Link>
        <Link src={personal.linkedin} style={[s.contactItem, s.contactLink]}>
          {personal.linkedinHandle}
        </Link>
        <Link src={personal.github} style={[s.contactItem, s.contactLink]}>
          {personal.githubHandle}
        </Link>
      </View>
    </View>
  );
}

function CVSkills({ t }: { t: Translations }) {
  return (
    <>
      <Text style={s.sectionTitle}>{t.cv.skillsTitle}</Text>
      {expertiseGroups.map((group) => (
        <View key={group.key} style={s.skillGroup}>
          <Text style={s.skillLabel}>{t.expertise.groups[group.key]}</Text>
          <Text style={s.skillTags}>{group.tags.join(' · ')}</Text>
        </View>
      ))}
    </>
  );
}

function CVProjects({ t }: { t: Translations }) {
  return (
    <>
      <Text style={s.sectionTitle}>{t.cv.projectsTitle}</Text>
      {projects.map((project) => {
        const pt = getProjectTranslation(t, project.id);
        return (
          <View key={project.id} style={s.project} wrap={false}>
            <View style={s.projHeader}>
              <Text style={s.projTitle}>{pt.title}</Text>
              <Text style={s.projDomain}>{project.domain}</Text>
            </View>
            <View style={s.projMeta}>
              <View style={s.projMetaItem}>
                <Text style={s.projMetaLabel}>{t.cv.role}: </Text>
                <Text style={s.projMetaValue}>{pt.role}</Text>
              </View>
              <View style={s.projMetaItem}>
                <Text style={s.projMetaLabel}>{t.cv.duration}: </Text>
                <Text style={s.projMetaValue}>{project.duration}</Text>
              </View>
            </View>
            <Text style={s.projDesc}>{pt.desc}</Text>
            <View style={s.projImpact}>
              {project.metrics.map((metric) => (
                <Text key={metric.id} style={s.impactTag}>
                  {pt.metrics[metric.id]}
                </Text>
              ))}
            </View>
            <Text style={s.projStack}>
              {t.cv.stack}: {project.stack.join(' · ')}
            </Text>
          </View>
        );
      })}
    </>
  );
}

function CVOpenSource({ t }: { t: Translations }) {
  return (
    <>
      <Text style={s.sectionTitle}>{t.cv.openSourceTitle}</Text>
      {openSourceRepos.map((repo) => {
        const item = t.openSource.items[repo.key];
        return (
          <Text key={repo.key} style={s.ossItem}>
            <Link src={repo.repo} style={s.ossName}>
              {item.title}
            </Link>
            {' — '}
            {item.desc}
          </Text>
        );
      })}
    </>
  );
}

function CVEducation({ t }: { t: Translations }) {
  return (
    <>
      <Text style={s.sectionTitle}>{t.cv.educationTitle}</Text>
      {educationEntries.map((entry) => {
        const et = t.education.entries[entry.key];
        return (
          <View key={entry.key} style={s.eduEntry}>
            <Text style={s.eduYear}>{et.year}</Text>
            <Text style={s.eduDegree}>{et.degree}</Text>
            <Text style={s.eduInst}>{et.institution}</Text>
          </View>
        );
      })}
      <View style={s.certRow}>
        {certifications.map((certKey) => (
          <Text key={certKey} style={s.certTag}>
            {t.education.certs[certKey]}
          </Text>
        ))}
      </View>
    </>
  );
}

function CVLanguages({ t }: { t: Translations }) {
  return (
    <>
      <Text style={s.sectionTitle}>{t.cv.languagesTitle}</Text>
      <View style={s.langRow}>
        {spokenLanguages.map((lang) => (
          <View key={lang.key} style={s.langItem}>
            <Text style={s.langName}>{t.languages.names[lang.key]}</Text>
            <Text style={s.langLevel}>({t.languages.levels[lang.key]})</Text>
          </View>
        ))}
      </View>
    </>
  );
}

interface Props {
  locale: Locale;
}

export function CVDocument({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <Document>
      <Page size="A4" style={s.page}>
        <CVHeader t={t} />
        <Text style={s.summary}>{t.cv.summary}</Text>
        <CVSkills t={t} />
        <CVProjects t={t} />
        <CVOpenSource t={t} />
        <CVEducation t={t} />
        <CVLanguages t={t} />
      </Page>
    </Document>
  );
}
