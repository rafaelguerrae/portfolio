"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaEnvelope, FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { LanguageToggle } from './language-toggle';
import { ThemeToggle } from './theme-toggle';

export function Sidebar() {
  const t = useTranslations('sidebar');

  return (
    <aside className="w-full lg:w-[25rem] lg:min-h-screen lg:fixed lg:left-0 lg:top-0 lg:border-r border-border p-6 flex flex-col">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative h-48 w-48 rounded-full overflow-hidden mb-4">
          <Image
            src="/rafael.png"
            alt="Rafael Guerra"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold">{t('name')}</h2>
        <p className="text-muted-foreground">{t('role')}</p>
        <div className="flex mt-3 gap-4">
          <Link
            href="mailto:rafaelguerrae@outlook.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/rafaelguerra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/rafaelguerrae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <div className="space-y-4">
          <Link href="https://www.linkedin.com/company/minipa/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2">
              <FaBriefcase className="h-4 w-4 text-muted-foreground" />
              <p className="font-medium">{t('workplace')}</p>
            </div>
            <p className="text-sm text-muted-foreground ml-6">{t('workplaceRole')}</p>
          </Link>
          <Link href="https://www.ufabc.edu.br/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2">
              <FaGraduationCap className="h-4 w-4 text-muted-foreground" />
              <p className="font-medium">{t('education')}</p>
            </div>
            <p className="text-sm text-muted-foreground ml-6">{t('course')}</p>
          </Link>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between border-t pt-4 mt-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </aside>
  );
}
