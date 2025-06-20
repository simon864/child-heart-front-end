import styles from './HistoryPage.module.css'

interface ParagraphProps {
    paragraph: string;
}

interface ImageProps {
    image: string;
}

export function Paragraph({ paragraph }: ParagraphProps) {
    return (
        <div className={styles.paragraphContainer}>
            <p>{paragraph}</p>
        </div>
    );
}

export function ImageItemCarousel({ image }: ImageProps) {
    return (
        <img 
            src={image}
            className={styles.imageItemCarousel}
        />
    )
}

export function ImageItemCard({ image }: ImageProps) {
    return (
        <img 
            src={image}
            className={styles.imageItemCard}
        />
    )
}