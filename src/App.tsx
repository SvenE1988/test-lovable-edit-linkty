import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useScrollToHash } from "./hooks/useScrollToHash";
import { HelmetProvider, Helmet } from "react-helmet-async";
import ScrollToTop from "./components/shared/ScrollToTop";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { routes } from "./config/routes";
import NotFound from "./pages/NotFound";
import "@/App.css";

// Separate component for Routes to use hooks inside Router context
const AppContent = () => {
  useScrollToHash();

  useEffect(() => {
    (window as Window & { React?: typeof React }).React = React;
  }, []);

  return (
    <>
      <main id="main-content" className="min-h-screen outline-none" tabIndex={-1}>
        {/* Helper for static a11y verification: #main-content target */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <>
                    <Helmet>
                      <title>{route.meta?.title || "Linkty"}</title>
                      {route.meta?.description && (
                        <meta name="description" content={route.meta.description} />
                      )}

                      {/* Open Graph / Facebook */}
                      <meta
                        property="og:title"
                        content={route.meta?.title || "Linkty - Aus Anfragen werden Termine"}
                      />
                      <meta
                        property="og:description"
                        content={
                          route.meta?.description ||
                          "Die KI-Plattform für Terminbuchung & Content Automation."
                        }
                      />
                      <meta property="og:image" content="/Images/og-image.svg" />
                      <meta property="og:type" content="website" />
                      <meta property="og:url" content={window.location.origin + route.path} />

                      {/* Twitter */}
                      <meta name="twitter:card" content="summary_large_image" />
                      <meta
                        name="twitter:title"
                        content={route.meta?.title || "Linkty - Aus Anfragen werden Termine"}
                      />
                      <meta
                        name="twitter:description"
                        content={
                          route.meta?.description ||
                          "Die KI-Plattform für Terminbuchung & Content Automation."
                        }
                      />
                      <meta name="twitter:image" content="/Images/og-image.svg" />

                      {/* Canonical */}
                      <link rel="canonical" href={window.location.origin + route.path} />
                    </Helmet>
                    <route.component />
                  </>
                }
              />
            ))}
            {/* Catch-all 404 Route - must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App bg-surface-light font-sans text-brand-dark antialiased">
          <AppContent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
