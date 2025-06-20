import styles from "./ContactsPage.module.css"

interface ParagraphProps {
    image: string;
    primary: string;
    secondary: string;
}

export function Contact({ image, primary, secondary }: ParagraphProps) {
    return (
        <div className={styles.contactContainer}>
            <img src={image} />
            <p className={styles.primary}>{primary}</p>
            <p className={styles.secondary}>{secondary}</p>
        </div>
    );
}