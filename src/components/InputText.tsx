import { FC } from 'react';

interface Props {
  name: string;
  required: boolean;
  value: string;
  className?: string;
  label?: string;
  mLength?: number;
  errors?: string;  
  touched?: boolean;
  onChange: (e) => void;
}

const InputText: FC<Props> = (props) => {
  const { label, name, value, className, onChange, required, errors, touched } = props;

  return (
    <>
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={name}
        className={`input-field lg:w-2/4 ${className}`}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      {errors && touched && <span className="error-notify">{errors}</span>}
    </>
  )
};

export default InputText;
