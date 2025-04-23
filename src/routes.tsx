import { Route, Routes } from "react-router-dom";
import PresidentPage from "./components/presidentPage/presidentPage";
import ReportsPage from "./components/reportsPage/reportsPage";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="*" element={<PresidentPage />} />
      <Route path="/reportsPage" element={<ReportsPage />} />
    </Routes>
  );
}
