import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Homecoming from "./pages/Homecoming";
import Sports from "./pages/Sports";
import { useCustomRouter } from "./hooks/useCustomRouter";

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const { currentPath } = useCustomRouter();

  // Simple path matching
  const renderPage = () => {
    if (currentPath === "/" || currentPath === "") {
      return <Home />;
    } else if (currentPath === "/history") {
      return <History />;
    } else if (currentPath === "/events") {
      return <Events />;
    } else if (currentPath === "/events/homecoming") {
      return <Homecoming />;
    } else if (currentPath === "/events/sports") {
      return <Sports />;
    } else if (currentPath === "/alumni") {
      return <Alumni />;
    } else if (currentPath === "/media") {
      return <Media />;
    } else if (currentPath === "/contact") {
      return <Contact />;
    } else {
      return <NotFound />;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Layout>{renderPage()}</Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
