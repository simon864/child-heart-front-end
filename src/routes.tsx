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
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NeedHelpPage from "./pages/NeedHelpPage/NeedHelpPage";
import NewsPage from "./pages/NewsPage/newPage";
import NewsDetailPage from "./pages/NewsPage/newsDetailPage";

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
      <Route path="/projects-page" element={<ProjectsPage />} />
      <Route path="/need-help-page" element={<NeedHelpPage />} />
      <Route path="/news-page" element={<NewsPage />} />
      <Route path="/news-page/:id" element={<NewsDetailPage />} />
    </Routes>
  );
}
