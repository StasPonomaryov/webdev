import { FC } from 'react';

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Footer: FC<{locale: string}> = ({ locale }) => {
  const t = useTranslations('Index');

  return (
    <footer className="page-footer">
      <div className="row">
        <div className="copyright md:w-1/3">
          &copy; {t('title')}, 2023
        </div>
        <div className="menu md:w-1/3">
          <nav role="menu">
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
        <div className="contact-info md:w-1/3 text-right">
          +38(097)74-34-030, ponomaryov.stas@gmail.com 
        </div>
      </div>
    </footer>
  )
};

export default Footer;