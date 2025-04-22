import { ReportsContentProps } from "./interfaces"
import reportsStyle from "./reportsPage.module.css"

export function ReportsLinks ( { text, link }: ReportsContentProps ) {
    return (
        <>
            <a className={reportsStyle.link} href={link}>{text}</a>
        </>
    )
}