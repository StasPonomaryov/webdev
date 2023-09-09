import { FC } from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  task: string;
  message?: string;
};

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = (formData) => {
  const { name, email, task, message } = formData;
  let taskReal: string;
  switch (task) {
    case 'create': taskReal = 'Development'; break;
    case 'hire': taskReal = 'Update'; break;
    case 'ask':
    default: taskReal = 'Optimize'; break;
  }

  return (
    <div>
      <p>New message from personal site:</p>
      <p>{message}</p>
      <p>Choice: {taskReal}</p>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
    </div>
  )
};
