import { OurProjects } from "./data";
import OurProjectsItem from "./Props";
import Title from "../../components/title/title";

function ProjectsPage() {
    return (
        <>
        <Title text="Наши проекты"/>
        <OurProjectsList/>
        </>
    )
}
export default ProjectsPage

function OurProjectsList() {
    return (
        <div>
            {OurProjects.map((OurProjects) => (
                <OurProjectsItem
                image={OurProjects.image}
                />
            ))}
        </div>
    )
}