import { Route, Routes } from "react-router-dom";
import PresidentPage from "./components/presidentPage/presidentPage";
import ReportsPage from "./components/reportsPage/reportsPage";
import ObjectivesPage from "./components/objectivesPage/objectivesPage";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="*" element={<ObjectivesPage />} />
      <Route path="/presidentPage" element={<PresidentPage />} />
      <Route path="/reportsPage" element={<ReportsPage />} />
    </Routes>
  );
}

// /ObjectivesPage
// /reportsPage
// /presidentPage
