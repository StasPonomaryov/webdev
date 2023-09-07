import { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslations } from 'next-intl';
import { sendEmail } from 'sendEmail';
import RadioButtonGroup from './RadioGroup';
import TextArea from './TextArea';
import InputText from './InputText';
import InputEmail from './InputEmail';

interface Props {
  selected: string;
}

export const Form: FC<Props> = (props) => {
  const { selected } = props;
  const t = useTranslations();

  const schema = yup.object().shape({
    name: yup.string().required(t('Error.nameRequired')),
    email: yup.string().required(t('Error.emailRequired')).email(t('Error.emailInvalid')),
    task: yup.string().required(t('Error.subjectRequired')),
    message: yup.string()
  });

  const radioOptions = [
    { label: t('Index.create'), value: 'create' },
    { label: t('Index.hire'), value: 'hire' },
    { label: t('Index.ask'), value: 'ask' }
  ];
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      task: selected || '',
      message: ''
    },
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: async (formData) => {
      console.log(formData);
      await sendEmail(formData);
    },
  });  

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } = formik;

  return (
    <form className="mt-2 space-y-4" onSubmit={handleSubmit} noValidate>
      <InputText
        name="name"
        label={t('Index.whatIsYourName')}
        value={values.name}
        onChange={handleChange}
        errors={errors.name}
        touched={touched.name}
        required={true}
      />
      <InputEmail
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        errors={errors.email}
        touched={touched.email}
        required={true}
      />
      <RadioButtonGroup
        type="horizontal"
        required={true}
        errors={errors.task}
        touched={touched.task}
        labels={radioOptions}
        value={values.task}
        onChange={setFieldValue}
      />
      <TextArea
        label={t('Index.youCanWriteHere')}
        name="message"
        value={values.message}
        required={false}
        errors={errors.message}
        touched={touched.message}
        onChange={handleChange}
      />
      <button
        className="button-main"
        type="submit"
      >{t('Index.send')}</button>
    </form>
  );
}