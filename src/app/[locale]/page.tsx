import { useTranslations } from "next-intl";
import { ProjectCard } from "@/components/project-card";
import projects from "@/data/projects.json";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  const t = useTranslations("home");
  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 p-6 lg:ml-[25rem]">
        {/* Projects Section */}
        <section id="projects" className="max-w-5xl mx-auto my-8 lg:my-16">
          <h2 className="text-3xl font-bold mb-8">{t("projects.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </section>
        
        {/* Footer */}
        <footer className="border-t py-6 text-center text-sm text-muted-foreground mt-auto">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </footer>
      </main>
    </div>
  );
}