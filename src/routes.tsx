import { Route, Routes } from "react-router-dom";
import PresidentPage from "./pages/PresidentPage/presidentPage";
import ReportsPage from "./pages/ReportsPage/reportsPage";
import ObjectivesPage from "./pages/ObjectivesPage/objectivesPage";
import BoardPage from "./pages/BoardPage/boardPage";
import CouncilPage from "./pages/CouncilPage/councilPage";
import TeamPage from "./pages/TeamPage/teamPage";
import ProgramPage from "./pages/ProgramsPage/programPage";
import PhilanthropistsPage from "./pages/PhilanthropistsPage/PhilanthropistsPage";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="*" element={<PresidentPage />} />
      <Route path="/Objectives-page" element={<ObjectivesPage />} />
      <Route path="/reports-page" element={<ReportsPage />} />
      <Route path="/council-page" element={<CouncilPage />} />
      <Route path="/team-page" element={<TeamPage />} />
      <Route path="/board-page" element={<BoardPage />} />
      <Route path="/program-page" element={<ProgramPage />} />
      <Route path="/philanthopists-page" element={<PhilanthropistsPage />} />
    </Routes>
  );
}

// /Objectives-page
// /reports-page
// /president-page
// /board-page
// /council-page
// /team-page
// /program-page
