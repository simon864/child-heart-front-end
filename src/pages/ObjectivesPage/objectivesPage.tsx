import objectivesStyle from "./objectivesPage.module.css";
import Title from "../../components/Title/title";
import { DirectionsCard, TasksInfo } from "./props";
import { directionsText, tasksText } from "./data";
import ObjectivesIMG from "../../assets/images/objectivesPage/objectives.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function ObjectivesPage() {
  return (
    <ScrollToTop>
      <Title text="Цели и задачи фонда “Детское сердце”" />
      <DirectionsFund />
      <TasksFund />
    </ScrollToTop>
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
        <img src={ObjectivesIMG} alt="Test" /> {/*тест фото надо будет поменять */}
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
