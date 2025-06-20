import appStyles from "./App.module.css";
import "./Common.css";
import Header from "./components/header/header";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes";
import Footer from "./components/Footer/footer";
import { ModalProvider } from "./components/DonationModal/donationModal";
import { ModalPlaceholder } from "./components/DonationModal/ModalPlaceholder";

export default function App() {
  return (
    <>
      <ModalProvider>
        <BrowserRouter>
          <Header />
          <main className={appStyles.mainContainer}>
            <AppRouters />
          </main>
        </BrowserRouter>
        <Footer />
        <ModalPlaceholder />
      </ModalProvider>
    </>
  );
}
