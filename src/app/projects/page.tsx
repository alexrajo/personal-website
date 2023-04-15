"use client";

import PageWrapper from "@/components/pagewrapper";
import { Project, ProjectDisplay } from "./display";
//useSWR allows the use of SWR inside function components
import useSWR from "swr";

export const metadata = {
  title: "Projects",
  description: "My projects",
};

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: string) =>
  fetch(url)
    .then(async (res) => {
      return res.json();
    })
    .then((jsonData) => JSON.parse(jsonData));

export default function ProjectsPage() {
  const { data: projects, error } = useSWR<Project[]>("/api/projects", fetcher);

  return (
    <PageWrapper currentPage="projects">
      {error ? (
        <p>Error!</p>
      ) : (
        <div className="xs:flex xs:flex-col sm:grid sm:grid-cols-4 gap-5">
          {projects ? (
            projects.map((project) => <ProjectDisplay {...project} key={project.title + "-" + project.year} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </PageWrapper>
  );
}
