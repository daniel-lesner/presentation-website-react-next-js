import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between p-2 md:px-5 lg:px-40 text-white">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="rounded-lg"
        />
        <span className="text-lg md:text-2xl font-bold truncate">
          Daniel Lesner
        </span>
      </div>

      <div className="flex items-center space-x-5 font-bold">
        <nav className="hidden lg:flex space-x-6 text-gray-300 text-lg">
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#work" className="hover:text-white">
            Work
          </Link>
          <Link href="#education" className="hover:text-white">
            Education
          </Link>
        </nav>

        <a
          href="/documents/Daniel-Lesner_Curriculum-Vitae.pdf"
          download="Daniel-Lesner_Curriculum-Vitae.pdf"
          className="bold bg-primary-color text-black px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-custom hover:bg-secondary-color"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
