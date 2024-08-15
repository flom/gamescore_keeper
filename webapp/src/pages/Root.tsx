import { type ReactElement, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PocketBaseContext from "@/contexts/PocketBaseContext";

function Root(): ReactElement {
  const pb = useContext(PocketBaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!pb.authStore.isAuthRecord) {
      navigate("/login");
    }
  }, [pb, navigate]);

  return <Outlet />;
}

export default Root;
