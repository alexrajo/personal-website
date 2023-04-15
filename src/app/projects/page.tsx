import PageWrapper from "@/components/pagewrapper";
import { ProjectDisplay } from "./display";

export default function ProjectsPage() {
  return (
    <PageWrapper currentPage="projects">
      <div className="xs:flex xs:flex-col sm:grid sm:grid-cols-4 gap-5">
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
      </div>
    </PageWrapper>
  );
}
