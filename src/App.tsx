import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { PopupProvider } from "@/components/ui/PopupContext"; // ⬅️ import your popup provider

const queryClient = new QueryClient();

// Component to handle scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const timeoutId = setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Wrap everything inside PopupProvider */}
      <PopupProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PopupProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
