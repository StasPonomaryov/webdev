import { FC } from 'react';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  required: boolean;
  errors: string;
  touched: boolean;
  onChange: (e) => void;
}

const TextArea: FC<Props> = (props) => {
  const { label, name, value, placeholder, required, errors, touched, onChange } = props;

  return (
    <>
      <label htmlFor="message" className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        className="textarea-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
      {errors && touched && <span>{errors}</span>}
    </>
  );
};

export default TextArea;
