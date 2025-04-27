import { Route, Routes } from "react-router-dom";
import PresidentPage from "./pages/PresidentPage/presidentPage";
import ReportsPage from "./pages/ReportsPage/reportsPage";
import ObjectivesPage from "./pages/ObjectivesPage/objectivesPage";
import BoardPage from "./pages/BoardPage/boardPage";
import CouncilPage from "./pages/CouncilPage/councilPage";
import TeamPage from "./pages/TeamPage/teamPage";
import ProgramPage from "./pages/ProgramsPage/programPage";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/Objectives-page" element={<ObjectivesPage />} />
      <Route path="/president-page" element={<PresidentPage />} />
      <Route path="/reports-page" element={<ReportsPage />} />
      <Route path="/council-page" element={<CouncilPage />} />
      <Route path="*" element={<TeamPage />} />
      <Route path="/board-page" element={<BoardPage />} />
      <Route path="/program-page" element={<ProgramPage />} />
    </Routes>
  );
}

// /Objectives-page
// /reports-page
// /president-page
// /board-page
// /council-page
// /team-page
