import { ParagraphInfoProps, AchievementCardProps } from "./interfaces"
import presidentStyle from "./presidentPage.module.css"

export function ParagraphInfo({ paragraph }: ParagraphInfoProps) {
    return (
        <div className={presidentStyle.paragraphContainer}>
            <p>{paragraph}</p>
        </div>
    )

}

export function AchievementCard({ title, year }: AchievementCardProps) {
    return (
    <div className={presidentStyle.achievementCard}>
        <p>{title}</p>
        <span>{year}</span>
    </div>
    )
}