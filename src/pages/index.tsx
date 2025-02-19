import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="flex flex-col items-center gap-24">
        <ContactSection />
        <ProjectsSection />
        <WorkSection />
      </main>
    </div>
  );
}
