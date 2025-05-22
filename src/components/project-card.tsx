'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({ title, description, image, tags, githubUrl, liveUrl }: ProjectProps) {
  return (
    <div 
      className="bg-card text-card-foreground rounded-lg border shadow-sm overflow-hidden hover:bg-secondary cursor-pointer transition-all"
      onClick={() => window.open(liveUrl, '_blank')}
    >
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-secondary/30 text-secondary-foreground rounded text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div 
          className="flex gap-3 mt-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <Link 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:-translate-y-1 transition-all"
          >
            <FaGithub className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}