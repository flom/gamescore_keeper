import { refreshAuth } from "@/lib/PocketBase";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { registerSW } from "virtual:pwa-register";
import App from "@/app/App";
import "./index.css";

registerSW();

const MAX_RETRIES = 3;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: Number.POSITIVE_INFINITY,
      retry: MAX_RETRIES,
    },
  },
});

const container = document.querySelector("#root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  );
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshAuth();
  }
});
