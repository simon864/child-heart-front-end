import appStyles from "./App.module.css";
import "./common.css";
import Footer from "./components/footer/footer";
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
        <Link to={"/presidentPage"}>О президенте</Link>
      </p>
      <p>
        <Link to={"/reportsPage"}>Отчеты и уставные документы</Link>
      </p>
      <p>
        <Link to={"/objectivesPage"}>Цели и задачи фонда</Link>
      </p>
      <p>
        <Link to={"/boardPage"}>Правление фонда</Link>
      </p>
      <p>
        <Link to={"/councilPage"}>Попечительский совет</Link>
      </p>
    </div>
  );
}
