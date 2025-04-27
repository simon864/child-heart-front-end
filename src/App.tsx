import appStyles from "./App.module.css";
import "./common.css";
import Footer from "./components/Footer/footer";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className={appStyles.mainContainer}>
          <AppRouters />
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

//Header надо будет удалить

function Header() {
  return (
    <div className={appStyles.headerContainer}>
      <p>
        <Link to={"/president-page"}>О президенте</Link>
      </p>
      <p>
        <Link to={"/reports-page"}>Отчеты и уставные документы</Link>
      </p>
      <p>
        <Link to={"/objectives-page"}>Цели и задачи фонда</Link>
      </p>
      <p>
        <Link to={"/board-page"}>Правление фонда</Link>
      </p>
      <p>
        <Link to={"/council-page"}>Попечительский совет</Link>
      </p>
      <p>
        <Link to={"/team-page"}>Команда фонда</Link>
      </p>
      <p>
        <Link to={"/program-page"}>Наши программы</Link>
      </p>
    </div>
  );
}
