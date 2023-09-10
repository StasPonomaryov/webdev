import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import sectionProjects from '../../../public/img/winnie-2.png';

const ProjectsSection = () => {
  const t = useTranslations('Index');

  return (
    <section id="projects">
        <div className="container">
          <h2>{t('projects')}</h2>
          <div className="section-row">
            <div className="projects-image">
              <Image src={sectionProjects} alt={t('projects')} unoptimized className="h-auto max-w-full p-4" />
            </div>
            <div className="projects-info">
              <p>{t('projectsFirstParagraph')}</p>
              <p>{t.rich('projectsSecondParagraph', {
                link: (chunks: ReactNode) => <a href="#contacts">{chunks}</a>
              })}</p>
            </div>
          </div>
        </div>
      </section>
  )
};

export default ProjectsSection;
