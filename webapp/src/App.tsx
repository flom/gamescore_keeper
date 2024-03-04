import type { ReactElement } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contributions from "./pages/Contributions";
import Groups from "./pages/Groups";
import AddGroup from "./pages/AddGroup";
import LoadingOrError from "@/components/LoadingOrError";
import GroupPage from "@/pages/GroupPage";
import AddGameRecordPage from "@/pages/AddGameRecordPage";
import EditGameRecordPage from "@/pages/EditGameRecordPage";
import GamePage from "@/pages/GamePage";
import EditGroupPage from "@/pages/EditGroupPage";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/add" element={<AddGroup />} />
          <Route path="/groups/:groupId" element={<GroupPage />} />
          <Route path="/groups/:groupId/edit" element={<EditGroupPage />} />
          <Route
            path="/groups/:groupId/add-game"
            element={<AddGameRecordPage />}
          />
          <Route path="/groups/:groupId/game/:gameId" element={<GamePage />} />
          <Route
            path="/groups/:groupId/edit-game/:gameRecordId"
            element={<EditGameRecordPage />}
          />
          <Route path="/contributions" element={<Contributions />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
