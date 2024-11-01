import { refreshAuth } from "@/lib/PocketBase";
import { type ReactElement, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Contributions from "../pages/Contributions";
import GroupsPage from "./routes/GroupsPage";
import AddGroup from "./routes/AddGroup";
import LoadingOrError from "@/components/LoadingOrError";
import GroupPage from "@/app/routes/GroupPage";
import AddGameRecordPage from "@/app/routes/AddGameRecordPage";
import EditGameRecordPage from "@/pages/EditGameRecordPage";
import GamePage from "@/app/routes/GamePage";
import EditGroupPage from "@/pages/EditGroupPage";
import LoginPage from "@/app/routes/LoginPage";
import Root from "@/pages/Root";

export default function App(): ReactElement {
  useEffect(() => {
    refreshAuth();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
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
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
