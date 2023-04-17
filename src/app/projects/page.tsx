"use client";

import PageWrapper from "@/components/pagewrapper";
import { Project, ProjectDisplay } from "./display";
import projects from "./projects.json";

export const metadata = {
  title: "Projects",
  description: "My projects",
};

export default function ProjectsPage() {
  return (
    <PageWrapper currentPage="projects">
      <div className="xs:flex xs:flex-col sm:grid sm:grid-cols-4 gap-5">
        {(projects as Project[]).map((project) => (
          <ProjectDisplay {...project} key={project.title + "-" + project.year} />
        ))}
      </div>
    </PageWrapper>
  );
}
