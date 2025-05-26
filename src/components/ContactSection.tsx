import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import GithubIcon from '@/components/GithubIcon';
import LinkedInIcon from '@/components/LinkedInIcon';

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center justify-center text-white pt-8">
      <h1 className="text-5xl font-bold mb-6">Daniel Lesner</h1>
      <h1 id="contact" className="text-4xl text-zinc-400 mb-14">
        Contact
      </h1>

      <div className="space-y-4 text-xl md:text-2xl lg:text-3xl gap-4 flex flex-col gap-4 items-start">
        <div className="flex space-x-2 gap-6 items-center ">
          <DevicePhoneMobileIcon className="size-10 md:size-12 lg:size-14 text-primary-color fill-current animate-combined"></DevicePhoneMobileIcon>
          <a className="hover:text-secondary-color" href="tel:0033676939082">
            0033676939082
          </a>
        </div>
        <div className="flex space-x-2 gap-6 items-center ">
          <EnvelopeIcon className="size-10 md:size-12 lg:size-14 text-primary-color fill-current animate-combined"></EnvelopeIcon>
          <a
            className="hover:text-secondary-color"
            href="mailto:daniel.lesner@icloud.com"
          >
            daniel.lesner@icloud.com
          </a>
        </div>
        <div className="flex space-x-2 gap-6 items-center ">
          <LinkedInIcon className="text-primary-color fill-current animate-combined" />
          <a
            className="hover:text-secondary-color"
            href="http://www.linkedin.com/in/daniel-lesner"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/daniel-lesner
          </a>
        </div>
        <div className="flex space-x-2 gap-6 items-center ">
          <GithubIcon className="text-primary-color fill-current animate-combined" />
          <a
            className="hover:text-secondary-color"
            href="http://www.github.com/daniel-lesner"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/daniel-lesner
          </a>
        </div>
      </div>
    </div>
  );
}
