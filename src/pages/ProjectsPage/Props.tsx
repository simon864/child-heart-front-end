import { Link } from "react-router-dom";
import styles from "./ProjectsPage.module.css"

interface OurProjectsProps {
    image: string;
}

export default function OurProjectsItem ({image}: OurProjectsProps) {
    return (
        <Link to={"#"} >
        <img
        src={image}
        className={styles.projectImage}
        />
        </Link>
    )
}