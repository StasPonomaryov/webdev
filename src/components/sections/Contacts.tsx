import { useTranslations } from 'next-intl';
import { Form } from 'components/Form';

const ContactsSection = (props: { selectedSubject: string }) => {
  const { selectedSubject } = props;
  const t = useTranslations('Index');
  
  return (
    <section id="contacts">
      <div className="container">
        <h2>{t('contacts')}</h2>
        <div className="section-row">
          <div className="contacts-info">
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
          <div className="contacts-form">
            <p>{t('introduceYourself')}</p>
            <Form selected={selectedSubject} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContactsSection;
