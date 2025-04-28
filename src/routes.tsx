import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
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
      <Route path="*" element={<HomePage />} />
      <Route path="/president-page" element={<PresidentPage />} />
      <Route path="/objectives-page" element={<ObjectivesPage />} />
      <Route path="/reports-page" element={<ReportsPage />} />
      <Route path="/council-page" element={<CouncilPage />} />
      <Route path="/team-page" element={<TeamPage />} />
      <Route path="/board-page" element={<BoardPage />} />
      <Route path="/program-page" element={<ProgramPage />} />
      <Route path="/philanthopists-page" element={<PhilanthropistsPage />} />
    </Routes>
  );
}
