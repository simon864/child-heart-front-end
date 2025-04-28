import appStyles from "./App.module.css";
import "./common.css";
import Footer from "./components/Footer/footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <main className={appStyles.mainContainer}></main>
      </BrowserRouter>
      <Footer />
    </>
  );
}
