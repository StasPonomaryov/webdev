'use client';

import { useState } from 'react';
import AboutSection from 'components/sections/About';
import WorkSection from 'components/sections/Work';
import ProjectsSection from 'components/sections/Projects';
import ContactsSection from 'components/sections/Contacts';

export default function Index() {
  const [selectedSubject, setSelectedSubject] = useState('');

  const selectService = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    const targetName = button.name.replace('btn', '').toLowerCase();
    setSelectedSubject(targetName);
    document.getElementById('contacts').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <main className="page-content">
      <AboutSection />
      <WorkSection selectService={selectService} />
      <ProjectsSection />
      <ContactsSection selectedSubject={selectedSubject} />
    </main>
  );
}
