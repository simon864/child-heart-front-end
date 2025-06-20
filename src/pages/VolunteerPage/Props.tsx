import styles from "./VolunteerPage.module.css"

interface ParagraphProps {
    paragraph: string;
}

export function Paragraph({ paragraph }: ParagraphProps) {
    return (
        <div className={styles.paragraphContainer}>
            <p>{paragraph}</p>
        </div>
    );
}