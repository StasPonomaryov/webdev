'use client';

import { ReactNode } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import sectionAbout from '../../../public/img/growth.jpg';
import sectionProjects from '../../../public/img/winnie-2.png';
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
import develop from '../../../public/img/develop.jpg';
import upgrade from '../../../public/img/upgrade.jpg';
import optimize from '../../../public/img/optimize.jpg';
import Button from '../../components/Button';
import { Form } from 'components/Form';

export default function Index() {
  const t = useTranslations('Index');
  const locale = useLocale();

  const selectService = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    console.log('>>>PUSHED', button.name);
  }

  return (
    <main className="page-content">
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
              <Image src={html} alt="HTML 5" unoptimized  loading="lazy" />
            </div>
            <div className="w-2/4 md:w-1/5 lg:w-1/5">
              <Image src={css} alt="CSS 3" unoptimized  loading="lazy" />
            </div>
            <div className="w-2/4 md:w-1/5 lg:w-1/5">
              <Image src={js} alt="Javascript" unoptimized  loading="lazy" />
            </div>
            <div className="w-2/4 md:w-1/5 lg:w-1/5">
              <Image src={ts} alt="TypeScript" unoptimized  loading="lazy" />
            </div>
            <div className="w-2/4 md:w-1/5 lg:w-1/5">
              <Image src={php} alt="PHP" unoptimized  loading="lazy" />
            </div>
          </div>
          <div className="section-row">
            <div className="w-2/4 md:w-1/5">
              <Image src={wordpress} alt="Wordpress" unoptimized  loading="lazy" />
            </div>
            <div className="w-2/4 md:w-1/5 lg:w-1/5">
              <Image src={woocommerce} alt="Woocommerce" unoptimized  loading="lazy" />
            </div>
            <div className="w-2/4 md:w-1/5 lg:w-1/5">
              <Image src={opencart} alt="Opencart" unoptimized  loading="lazy" />
            </div>
            <div className="w-2/4 md:w-1/5 lg:w-1/5">
              <Image src={nodejs} alt="Node JS" unoptimized  loading="lazy" />
            </div>
            <div className="w-2/4 md:w-1/5 lg:w-1/5">
              <Image src={nextjs} alt="Next JS" unoptimized  loading="lazy" />
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center">
          <Link href={`/files/resume-${locale}.pdf`} target="_blank" className="button-main inline-block my-6">{t('resume')}</Link>
        </div>
      </section>
      <section id="work">
        <div className="container mx-auto">
          <h2>{t('work')}</h2>
          <div className="flex">
            <div className="flex flex-col items-stretch w-full md:w-1/3 p-2">
              <div className="mb-2">
                <Image src={develop} alt={t('Development')} unoptimized loading="lazy" />
              </div>
              <h3>{t('Development')}</h3>
              {t.rich('developmentDetails', {
                p: (chunks: ReactNode) => <p>{chunks}</p>
              })}
              <Button
                className="button-secondary flex self-start mt-auto"
                type="button"
                name="btnOrder"
                onClick={selectService}
              >{t('buttonOrder')}</Button>
            </div>
            <div className="flex flex-col items-stretch w-full md:w-1/3 p-2">
              <div className="mb-2">
                <Image src={upgrade} alt={t('Update / Repair / Upgrade')} unoptimized loading="lazy" />
              </div>
              <h3>{t('Update / Repair / Upgrade')}</h3>
              {t.rich('updateDetails', {
                p: (chunks: ReactNode) => <p>{chunks}</p>
              })}
              <Button
                className="button-secondary flex self-start mt-auto"
                type="button"
                name="btnHire"
                onClick={selectService}
              >{t('buttonHire')}</Button>
            </div>
            <div className="flex flex-col items-stretch w-full md:w-1/3 p-2">
              <div className="mb-2">
                <Image src={optimize} alt={t('SEO, UI optimization')} unoptimized loading="lazy" />
              </div>
              <h3>{t('SEO, UI optimization')}</h3>
              {t.rich('optimizationDetails', {
                p: (chunks: ReactNode) => <p>{chunks}</p>
              })}
              <Button
                className="button-secondary flex self-start mt-auto"
                type="button"
                name="btnAsk"
                onClick={selectService}
              >{t('buttonAsk')}</Button>
            </div>
          </div>
        </div>
      </section>
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
      <section id="contacts">
        <div className="container mx-auto">
          <h2>{t('contacts')}</h2>
          <div className="section-row">
            <div className="md:w-2/4 pr-4">
              <p>{t('contactsFirstParagraph')}</p>
              <p>{t('contactsSecondParagraph')}</p>
              <div itemScope={true} itemType="http://schema.org/Person">
                <span itemProp="name">{t('title')}</span>,&nbsp;
                <span itemProp="jobTitle">{t('webDeveloper')}</span><br />
                {t('phone')}: <span itemProp="telephone">+38(097)74-34-030</span><br />
                {t('email')}:&nbsp;
                <a href="mailto:ponomaryov.stas@gmail.com" itemProp="email">ponomaryov.stas@gmail.com</a><br />
                {t('homePage')}:&nbsp;
                <a href="https://www.alex.kr.ua/dev" itemProp="url">alex.kr.ua</a><br />
              </div>
            </div>
            <div className="md:w-2/4 pl-4">
              <p>{t('introduceYourself')}</p>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
