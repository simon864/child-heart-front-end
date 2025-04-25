import { Route, Routes } from "react-router-dom";
import PresidentPage from "./components/presidentPage/presidentPage";
import ReportsPage from "./components/reportsPage/reportsPage";
import ObjectivesPage from "./components/objectivesPage/objectivesPage";
import BoardPage from "./components/boardPage/boardPage";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="*" element={<ObjectivesPage />} />
      <Route path="/presidentPage" element={<PresidentPage />} />
      <Route path="/reportsPage" element={<ReportsPage />} />
      <Route path="/boardPage" element={<BoardPage />} />
    </Routes>
  );
}

// /ObjectivesPage
// /reportsPage
// /presidentPage
