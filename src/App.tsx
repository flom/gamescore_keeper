import LoadingOrError from "components/LoadingOrError";
import type { ReactElement } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contributions from "./pages/Contributions";
import GroupsList from "./pages/GroupsList";
import AddGroup from "./pages/AddGroup";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/groups" element={<GroupsList />} />
          <Route path="/groups/add" element={<AddGroup />} />
          <Route path="/contributions" element={<Contributions />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
