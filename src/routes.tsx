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
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import RequisitesPage from "./pages/RequisitesPage/RequisitesPage";
import VolunteerPage from "./pages/VolunteerPage/VolunteerPage";
import BoxesPage from "./pages/BoxesPage/BoxesPage";
import TaxReturnPage from "./pages/TaxReturnPage/TaxReturnPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import SavedPage from "./pages/SavedPage/SavedPage";
import HelpNeededPage from "./pages/PersonHelpPage/PersonHelpPage";

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
      <Route path="/history-page" element={<HistoryPage />} />
      <Route path="/requisites-page" element={<RequisitesPage />} />
      <Route path="/volunteer-page" element={<VolunteerPage />} />
      <Route path="/boxes-page" element={<BoxesPage />} />
      <Route path="/tax-return-page" element={<TaxReturnPage />} />
      <Route path="/contacts-page" element={<ContactsPage />} />
      <Route path="/saved-page" element={<SavedPage />} />
      <Route path="/help-needed-page" element={<HelpNeededPage />} />
    </Routes>
  );
}
