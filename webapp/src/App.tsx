import { type ReactElement, Suspense, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contributions from "./pages/Contributions";
import GroupsPage from "./pages/GroupsPage";
import AddGroup from "./pages/AddGroup";
import LoadingOrError from "@/components/LoadingOrError";
import GroupPage from "@/pages/GroupPage";
import AddGameRecordPage from "@/pages/AddGameRecordPage";
import EditGameRecordPage from "@/pages/EditGameRecordPage";
import GamePage from "@/pages/GamePage";
import EditGroupPage from "@/pages/EditGroupPage";
import PocketBaseContext from "@/contexts/PocketBaseContext";
import LoginPage from "@/pages/LoginPage";

export default function App(): ReactElement {
  const pb = useContext(PocketBaseContext);

  if (pb.authStore.isAuthRecord) {
    return (
      <BrowserRouter>
        <Suspense fallback={<LoadingOrError />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/groups/add" element={<AddGroup />} />
            <Route path="/groups/:groupId" element={<GroupPage />} />
            <Route path="/groups/:groupId/edit" element={<EditGroupPage />} />
            <Route
              path="/groups/:groupId/add-game"
              element={<AddGameRecordPage />}
            />
            <Route
              path="/groups/:groupId/game/:gameId"
              element={<GamePage />}
            />
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

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/contributions" element={<Contributions />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
