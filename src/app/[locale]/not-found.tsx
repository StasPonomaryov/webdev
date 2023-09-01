'use client';

import {useTranslations} from 'next-intl';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <main className="page-content">
      <h1>{t('title')}</h1>
      <p className="max-w-[460px]">{t('description')}</p>
    </main>
  );
}