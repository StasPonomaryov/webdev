import { FC } from 'react';

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

import authorPic from '../../public/img/stas.jpg';

const Header: FC<{locale: string}> = ({ locale }) => {
  const t = useTranslations('Index');

  return (
    <header className="page-header">
      <div className="row">
        <div className="heading">
          <h1>{t('title')}</h1>
          <h2>{t('shortDescription')}</h2>
        </div>
        <div className="languages">
          <Image
            src={authorPic}
            alt={t('title')}
            unoptimized
            loading="eager"
            className="profile-pic"
          />
          <Link href="/uk" className={locale === 'uk' ? 'active' : ''}>українська</Link>
          &nbsp;•&nbsp;
          <Link href="/en" className={locale === 'en' ? 'active' : ''}>english</Link>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link href="#about">{t('about')}</Link>
              </li>
              <li>
                <Link href="#work">{t('work')}</Link>
              </li>
              <li>
                <Link href="#projects">{t('projects')}</Link>
              </li>
              <li>
                <Link href="#contacts">{t('contacts')}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Header;
