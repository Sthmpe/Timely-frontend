import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "./components/ui/sonner";

/**
 * Entry Point
 * 
 * This is the entry point of the React application.
 * It renders the root component of the application inside the DOM.
 * 
 * Libraries Used:
 * - React: Library for building user interfaces.
 * - ReactDOM: Library for rendering React components into the DOM.
 * - react-router-dom: Library for routing in React applications.
 * 
 * Components Used:
 * - Router: Component for providing routing functionality to the application.
 * - AppRoutes: Component defining the routes of the application.
 * - Auth0ProviderWithNavigate: Component for providing authentication functionality with navigation.
 */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <AppRoutes />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
);
