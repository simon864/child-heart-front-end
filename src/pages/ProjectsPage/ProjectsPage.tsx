import { OurProjects } from "./data";
import OurProjectsItem from "./Props";
import Title from "../../components/Title/title";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function ProjectsPage() {
  return (
    <ScrollToTop>
      <Title text="Наши проекты" />
      <OurProjectsList />
    </ScrollToTop>
  );
}
export default ProjectsPage;

function OurProjectsList() {
  return (
    <div>
      {OurProjects.map((OurProjects) => (
        <OurProjectsItem image={OurProjects.image} />
      ))}
    </div>
  );
}
