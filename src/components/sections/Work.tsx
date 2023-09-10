import { ReactNode, MouseEvent } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '../../components/Button';

import develop from '../../../public/img/develop.jpg';
import upgrade from '../../../public/img/upgrade.jpg';
import optimize from '../../../public/img/optimize.jpg';

const WorkSection = (props: { selectService: (e: MouseEvent<HTMLButtonElement>) => void }) => {
  const { selectService } = props;
  const t = useTranslations('Index');

  return (
    <section id="work">
      <div className="container">
        <h2>{t('work')}</h2>
        <div className="section-row">
          <div className="service">
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
          <div className="service">
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
          <div className="service">
            <div className="mb-2">
              <Image src={optimize} alt={t('SEO, UI optimization')} unoptimized loading="lazy" />
            </div>
            <h3>{t('SEO, UI optimization')}</h3>
            {t.rich('optimizationDetails', {
              p: (chunks: ReactNode) => <p>{chunks}</p>
            })}
            <Button
              type="button"
              name="btnAsk"
              onClick={selectService}
            >{t('buttonAsk')}</Button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default WorkSection;
