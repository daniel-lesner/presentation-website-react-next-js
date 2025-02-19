import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <ContactSection />
      <ProjectsSection />
    </div>
  );
}
