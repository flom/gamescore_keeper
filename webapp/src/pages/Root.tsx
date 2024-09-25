import { type ReactElement, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import usePocketBase from "@/hooks/usePocketBase";

function Root(): ReactElement {
  const pb = usePocketBase();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pb.authStore.isAuthRecord) {
      navigate("/login");
    }
  }, [pb, navigate]);

  return <Outlet />;
}

export default Root;
