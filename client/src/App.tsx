import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";
import Media from "./pages/Media";
import Merch from "./pages/Merch";
import Contact from "./pages/Contact";
import Homecoming from "./pages/Homecoming";
import Sports from "./pages/Sports";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/history"} component={History} />
        <Route path={"/events"} component={Events} />
        <Route path={"/events/homecoming"} component={Homecoming} />
        <Route path={"/events/sports"} component={Sports} />
        <Route path={"/alumni"} component={Alumni} />
        <Route path={"/media"} component={Media} />
        <Route path={"/merch"} component={Merch} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
