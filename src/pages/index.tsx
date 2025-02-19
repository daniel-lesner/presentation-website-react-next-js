import { GetStaticProps } from 'next';
import ContactSection from '@/components/ContactSection';
import EducationSection from '@/components/EducationSection';
import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="flex flex-col items-center gap-12 md:gap-16 lg:gap-24">
        <ContactSection />
        <ProjectsSection />
        <WorkSection />
        <EducationSection />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
