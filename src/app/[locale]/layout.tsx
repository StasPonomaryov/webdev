import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { source, fira } from '../fonts';

import '../globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  }
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['uk', 'en'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: RootLayoutProps) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: `${t('Index.title')}. ${t('Index.shortDescription')}`
  };
}

export default async function LocaleLayout({ children, params: { locale } }: RootLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className={`${source.variable} ${fira.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
