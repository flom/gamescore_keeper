import { type ReactElement, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import usePocketBase from "@/hooks/usePocketBase";

function Root(): ReactElement {
  const pb = usePocketBase();
  const navigate = useNavigate();

  useEffect(() => {
    if (pb.authStore.isValid) {
      pb.collection("users")
        .authRefresh()
        .catch((error: unknown) => {
          const knownError = error as { status: number };
          if (knownError.status === 0) {
            // request cancelled
            return;
          }
          pb.authStore.clear();
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, [pb, navigate]);

  return <Outlet />;
}

export default Root;
