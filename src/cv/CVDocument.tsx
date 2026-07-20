import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import './fonts';
import type { Locale } from '../i18n/types';
import { getTranslations } from '../i18n/useTranslation';
import { personal } from '../data/personal';
import { projects } from '../data/projects';
import { expertiseGroups } from '../data/expertise';
import { spokenLanguages } from '../data/languages';
import { educationEntries, certifications } from '../data/education';

const COBALT = '#2440C7';
const INK = '#15171C';
const INK2 = '#565A63';
const INK3 = '#8E929A';
const LINE = '#E4E4DD';

const s = StyleSheet.create({
  page: {
    fontFamily: 'IBM Plex Sans',
    fontSize: 9.5,
    color: INK,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 44,
    lineHeight: 1.45,
  },
  header: {
    marginBottom: 6,
  },
  name: {
    fontFamily: 'Space Grotesk',
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: -0.4,
    color: INK,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  subtitle: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 9,
    color: INK2,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
  contactRow: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 6,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: COBALT,
  },
  contactItem: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 8,
    color: INK2,
  },
  contactLink: {
    color: COBALT,
    textDecoration: 'none',
  },
  sectionTitle: {
    fontFamily: 'Space Grotesk',
    fontSize: 12,
    fontWeight: 600,
    color: INK,
    letterSpacing: -0.2,
    marginTop: 16,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: LINE,
  },
  summary: {
    fontSize: 9.5,
    color: INK2,
    lineHeight: 1.5,
    marginTop: 12,
    marginBottom: 4,
  },
  skillGroup: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  skillLabel: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 8,
    fontWeight: 500,
    color: COBALT,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    width: 90,
    paddingTop: 1,
  },
  skillTags: {
    flex: 1,
    fontSize: 9,
    color: INK,
  },
  project: {
    marginBottom: 10,
  },
  projHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  projTitle: {
    fontFamily: 'Space Grotesk',
    fontSize: 11,
    fontWeight: 600,
    color: INK,
  },
  projDomain: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 7.5,
    color: INK3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  projMeta: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 2,
  },
  projMetaItem: {
    flexDirection: 'row',
    gap: 3,
  },
  projMetaLabel: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 7.5,
    color: INK3,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  projMetaValue: {
    fontSize: 8.5,
    color: INK2,
    fontWeight: 500,
  },
  projDesc: {
    fontSize: 9,
    color: INK2,
    marginTop: 4,
    lineHeight: 1.45,
  },
  projImpact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  impactTag: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 7.5,
    color: COBALT,
    backgroundColor: '#F0F2FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  projStack: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 7.5,
    color: INK3,
    marginTop: 4,
  },
  eduEntry: {
    marginBottom: 6,
  },
  eduYear: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 8,
    color: COBALT,
    letterSpacing: 0.3,
  },
  eduDegree: {
    fontFamily: 'Space Grotesk',
    fontSize: 10,
    fontWeight: 600,
    color: INK,
    marginTop: 1,
  },
  eduInst: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 8,
    color: INK2,
    marginTop: 1,
  },
  certRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  certTag: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 8,
    color: INK2,
    backgroundColor: '#F2F2ED',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  langRow: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
  },
  langItem: {
    flexDirection: 'row',
    gap: 4,
  },
  langName: {
    fontFamily: 'Space Grotesk',
    fontSize: 10,
    fontWeight: 600,
  },
  langLevel: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 8,
    color: INK2,
    paddingTop: 1.5,
  },
});

interface Props {
  locale: Locale;
}

export function CVDocument({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <Document>
      <Page size="A4" style={s.page}>
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

        <Text style={s.summary}>{t.cv.summary}</Text>

        <Text style={s.sectionTitle}>{t.cv.skillsTitle}</Text>
        {expertiseGroups.map((group) => (
          <View key={group.key} style={s.skillGroup}>
            <Text style={s.skillLabel}>{t.expertise.groups[group.key]}</Text>
            <Text style={s.skillTags}>{group.tags.join(' · ')}</Text>
          </View>
        ))}

        <Text style={s.sectionTitle}>{t.cv.projectsTitle}</Text>
        {projects.map((project) => {
          const pt = t.work.projects[project.id];
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

        <Text style={s.sectionTitle}>{t.cv.languagesTitle}</Text>
        <View style={s.langRow}>
          {spokenLanguages.map((lang) => (
            <View key={lang.key} style={s.langItem}>
              <Text style={s.langName}>{t.languages.names[lang.key]}</Text>
              <Text style={s.langLevel}>({t.languages.levels[lang.key]})</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
