import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import sectionAbout from '../../../public/img/growth.jpg';
import html from '../../../public/img/logos/html.png';
import css from '../../../public/img/logos/css.png';
import js from '../../../public/img/logos/js.png';
import ts from '../../../public/img/logos/ts.png';
import php from '../../../public/img/logos/php.png';
import wordpress from '../../../public/img/logos/wordpress.png';
import woocommerce from '../../../public/img/logos/woo.png';
import opencart from '../../../public/img/logos/opencart.png';
import nodejs from '../../../public/img/logos/node.png';
import nextjs from '../../../public/img/logos/nextjs.png';

const AboutSection = () => {
  const t = useTranslations('Index');
  const locale = useLocale();

  return (
    <section id="about">
      <div className="container mx-auto">
        <div className="section-row">
          <div className="p-0 md:w-2/3">
            <h2>{t('about')}</h2>
            <p>{t('hello_1')}</p>
            <p>{t('myNameIs')}</p>
            <p>{t('itStarted')}</p>
            <p>{t('firstSteps')}</p>
            <p>{t('processed')}</p>
            <p>{t('upgraded')}</p>
            <p>{t('now')}</p>
          </div>
          <div className="md:w-1/3">
            <Image src={sectionAbout} alt={t('about')} unoptimized className="h-auto max-w-full p-4" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="section-row">
          <div className="w-2/4 md:w-1/5">
            <Image src={html} alt="HTML 5" unoptimized loading="lazy" />
          </div>
          <div className="w-2/4 md:w-1/5 lg:w-1/5">
            <Image src={css} alt="CSS 3" unoptimized loading="lazy" />
          </div>
          <div className="w-2/4 md:w-1/5 lg:w-1/5">
            <Image src={js} alt="Javascript" unoptimized loading="lazy" />
          </div>
          <div className="w-2/4 md:w-1/5 lg:w-1/5">
            <Image src={ts} alt="TypeScript" unoptimized loading="lazy" />
          </div>
          <div className="w-2/4 md:w-1/5 lg:w-1/5">
            <Image src={php} alt="PHP" unoptimized loading="lazy" />
          </div>
        </div>
        <div className="section-row">
          <div className="w-2/4 md:w-1/5">
            <Image src={wordpress} alt="Wordpress" unoptimized loading="lazy" />
          </div>
          <div className="w-2/4 md:w-1/5 lg:w-1/5">
            <Image src={woocommerce} alt="Woocommerce" unoptimized loading="lazy" />
          </div>
          <div className="w-2/4 md:w-1/5 lg:w-1/5">
            <Image src={opencart} alt="Opencart" unoptimized loading="lazy" />
          </div>
          <div className="w-2/4 md:w-1/5 lg:w-1/5">
            <Image src={nodejs} alt="Node JS" unoptimized loading="lazy" />
          </div>
          <div className="w-2/4 md:w-1/5 lg:w-1/5">
            <Image src={nextjs} alt="Next JS" unoptimized loading="lazy" />
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <Link href={`/files/resume-${locale}.pdf`} target="_blank" className="button-main inline-block my-6">{t('resume')}</Link>
      </div>
    </section>
  )
};

export default AboutSection;
