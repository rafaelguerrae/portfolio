import { Header } from "@/components/header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center p-8">
        <section className="w-full max-w-5xl mx-auto mt-16 mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium"
            >
              {t("hero.viewProjects")}
            </a>
            <a 
              href="#contact" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-md font-medium"
            >
              {t("hero.contactMe")}
            </a>
          </div>
        </section>

        <section id="projects" className="w-full max-w-5xl mx-auto my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("projects.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t("projects.projectTitle", { number: item })}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("projects.description")}
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-secondary/30 text-secondary-foreground rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-secondary/30 text-secondary-foreground rounded text-sm">Tailwind</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="w-full max-w-5xl mx-auto my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("contact.title")}</h2>
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-8 max-w-2xl mx-auto">
            <p className="text-center mb-6">
              {t("contact.description")}
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-primary hover:underline">{t("contact.email")}</a>
              <a href="#" className="text-primary hover:underline">{t("contact.linkedin")}</a>
              <a href="#" className="text-primary hover:underline">{t("contact.github")}</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
} 