import { FC } from 'react';
import clsx from 'clsx';

interface Props {
  type?: string;
  title?: string;
  required: boolean;
  touched: boolean;
  labels: {
    label: string;
    value: string;
  }[];
  value: string;
  errors: string;
  onChange: (field: string, value: any, shouldValidate?: boolean) => any;
}

const RadioGroup: FC<Props> = (props) => {
  const { type, title, required, labels, value, touched, errors, onChange } = props;

  return (
    <>
      {title && (
        <div className="radio-group-title">
          {title}
          {required && <span className="required">*</span>}
        </div>
      )}
      <ul
        className={clsx({
          'radio-group': true,
          'radio-group-horizontal': type === 'horizontal',
          'radio-group-vertical': type === 'vertical',
        })}
      >
        {labels.map((i) => {
          return (
            <li className="radio-group-item" key={i.value}>
              <div className="radio-group-item-inner">
                <input
                  id="radioGroup"
                  type="radio"
                  value={i.value}
                  name="task"
                  className="radio-group-input"
                  onChange={(e) => onChange('task', e.target.value)}
                  checked={value === i.value}
                />
                <label htmlFor="radioGroup" className="radio-group-label">
                  {i.label}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
      {errors && touched && <span className="error-notify">{errors}</span>}
    </>
  );
};

export default RadioGroup;
