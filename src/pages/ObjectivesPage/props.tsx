import objectivesStyle from "./objectivesPage.module.css";
import { DirectionsCardProps, TasksInfoProps } from "./interfaces";

export function DirectionsCard({ text }: DirectionsCardProps) {
  return (
    <div className={objectivesStyle.directionsCard}>
      <span> {text} </span>
    </div>
  );
}

export function TasksInfo({ paragraph }: TasksInfoProps) {
  return <li> {paragraph} </li>;
}
