import PageWrapper from "@/components/pagewrapper";
import { ProjectDisplay } from "./display";

export default function ProjectsPage() {
  return (
    <PageWrapper currentPage="projects">
      <div className="xs:flex xs:flex-col xs:space-y-5 sm:grid sm:grid-cols-4">
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
      </div>
    </PageWrapper>
  );
}
