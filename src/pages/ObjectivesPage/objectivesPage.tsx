import objectivesStyle from "./objectivesPage.module.css";
import Title from "../../components/title/title";
import { DirectionsCard, TasksInfo } from "./props";
import { directionsText, tasksText } from "./data";
import testImg from "../../assets/images/objectivesPage/test.png";

export default function ObjectivesPage() {
  return (
    <>
      <Title text="Цели и задачи фонда “Детское сердце”" />
      <DirectionsFund />
      <TasksFund />
    </>
  );
}

function DirectionsFund() {
  return (
    <div className={objectivesStyle.directionsContainer}>
      {directionsText.map((directionsText, index) => (
        <DirectionsCard key={index} text={directionsText.text} />
      ))}
    </div>
  );
}

function TasksFund() {
  return (
    <div className={objectivesStyle.tasksContainer}>
      <div className={objectivesStyle.imgContainer}>
        <img src={testImg} alt="Test" /> {/*тест фото надо будет поменять */}
      </div>
      <div className={objectivesStyle.textContainer}>
        <p>Задачи фонда:</p>
        <ul>
          {tasksText.map((tasksText, index) => (
            <TasksInfo key={index} paragraph={tasksText.paragraph} />
          ))}
        </ul>
      </div>
    </div>
  );
}
