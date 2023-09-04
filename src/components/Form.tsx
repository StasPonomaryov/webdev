import { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslations } from 'next-intl';
import RadioButtonGroup from './RadioGroup';
import TextArea from './TextArea';



export const Form: FC = () => {
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
      task: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: async ({ name, email, task, message }) => {
      console.log({ name, email, task, message });
    },
  });  

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } = formik;

  return (
    <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
      <label htmlFor="name" className="input-label">Як вас звати?</label>
      <input
        className="input-field lg:w-2/4"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        id="name"
      />
      {errors.name && touched.name && <span>{errors.name}</span>}
      <label htmlFor="email" className="input-label">Email</label>
      <input
        className="input-field lg:w-2/4"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        id="email"
      />
      {errors.email && touched.email && <span>{errors.email}</span>}
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
        label="Ви можете написати мені тут"
        name="message"
        value={values.message}
        required={false}
        errors={errors.message}
        touched={touched.message}
        onChange={handleChange}
      />
      <button type="submit">Відправити</button>
    </form>
  );
}