import { Route, Routes } from "react-router-dom";
import PresidentPage from "./components/presidentPage/presidentPage";
import ReportsPage from "./components/reportsPage/reportsPage";
import ObjectivesPage from "./components/objectivesPage/objectivesPage";
import BoardPage from "./components/boardPage/boardPage";
import CouncilPage from "./components/councilPage/councilPage";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/ObjectivesPage" element={<ObjectivesPage />} />
      <Route path="/presidentPage" element={<PresidentPage />} />
      <Route path="/reportsPage" element={<ReportsPage />} />
      <Route path="/councilPage" element={<CouncilPage />} />
      <Route path="*" element={<BoardPage />} />
    </Routes>
  );
}

// /ObjectivesPage
// /reportsPage
// /presidentPage
// /boardPage
// /councilPage
