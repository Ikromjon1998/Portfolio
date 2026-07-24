import { useTranslation } from '../i18n/useTranslation';
import { personal } from '../data/personal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { DownloadCVButton } from './DownloadCVButton';
import { MultilineText } from './MultilineText';
import { ContactForm } from './ContactForm';

export function Contact() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="contact" id="contact">
      <div className="wrap reveal" ref={ref}>
        <span className="eyebrow">{t.contact.eyebrow}</span>
        <h2>
          <MultilineText text={t.contact.heading} />
        </h2>
        <p>{t.contact.desc}</p>
        <div className="links">
          <a
            className="primary"
            href={`mailto:${personal.email}?subject=${encodeURIComponent(t.contact.mailSubject)}`}
          >
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            {personal.email}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            {personal.linkedinHandle}
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            {personal.githubHandle}
          </a>
          <DownloadCVButton variant="contact" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
