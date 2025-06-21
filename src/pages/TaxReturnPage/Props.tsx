import styles from "./TaxReturnPage.module.css"

interface ParagraphProps {
    paragraph: string;
}

interface BulletPointProps {
    paragraph: string;
}

export function Paragraph({ paragraph }: ParagraphProps) {
    return (
        <div className={styles.paragraphContainer}>
            <p>{paragraph}</p>
        </div>
    );
}

export function BulletPoint({ paragraph }: BulletPointProps) {
    return (
            <li>{paragraph}</li>
    );
}