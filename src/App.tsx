import appStyles from "./App.module.css";
import "./common.css";
import Footer from "./components/footer/footer";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <main className={appStyles.mainContainer}>
          <AppRouters />
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}
