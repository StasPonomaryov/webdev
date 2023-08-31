import { FC } from 'react';

'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...attributes }) => {

  return (
    <button
      {...attributes}
    >{children}</button>
  )
};

export default Button;
