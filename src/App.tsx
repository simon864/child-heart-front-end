import appStyles from "./App.module.css";
import "./Common.css";
import Header from "./сomponents/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes";
import Footer from "./components/Footer/footer";

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
