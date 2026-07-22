import { I18nProvider } from './i18n/I18nProvider';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Expertise } from './components/Expertise';
import { Work } from './components/Work';
import { AI } from './components/AI';
import { OpenSource } from './components/OpenSource';
import { Languages } from './components/Languages';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <I18nProvider>
      <TopBar />
      <main>
        <Hero />
        <Stats />
        <Expertise />
        <Work />
        <AI />
        <OpenSource />
        <Languages />
        <Education />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
