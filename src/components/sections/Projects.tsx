import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import sectionProjects from '../../../public/img/winnie-2.png';

const ProjectsSection = () => {
  const t = useTranslations('Index');

  return (
    <section id="projects">
        <div className="container mx-auto">
          <h2>{t('projects')}</h2>
          <div className="section-row">
            <div className="md:w-1/4">
              <Image src={sectionProjects} alt={t('projects')} unoptimized className="h-auto max-w-full p-4" />
            </div>
            <div className="p-0 md:w-3/4">
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
