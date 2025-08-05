import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Integration from "./pages/Integration";
import Setup from "./pages/Setup";
import NotFound from "./pages/NotFound";

declare global {
  interface Window {
    pendo: any;
  }
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (window.pendo) {
      window.pendo.initialize({
        visitor: {
          id: 'visitor-placeholder-id',
          email: 'user@example.com',
          full_name: 'Demo User'
        },
        account: {
          id: 'account-placeholder-id',
          name: 'Demo Account',
          is_paying: true
        }
      });
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/setup" element={<Setup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
