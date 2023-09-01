'use client';

import { useTranslations } from 'next-intl';
import { ReactNode, useEffect } from 'react';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="page-content">
      <h1>{t('title')}</h1>
      {t.rich('description', {
        p: (chunks:ReactNode) => <p className="mt-4">{chunks}</p>,
        retry: (chunks:ReactNode) => (
          <button
            className="text-white underline underline-offset-2"
            onClick={reset}
            type="button"
          >
            {chunks}
          </button>
        )
      })}
    </main>
  );
}