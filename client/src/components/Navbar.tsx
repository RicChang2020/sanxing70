import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useCustomRouter } from "@/hooks/useCustomRouter";
import { BASE_URL } from "@/const";

export default function Navbar() {
  const { currentPath, navigate } = useCustomRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "首頁" },
    { path: "/history", label: "學校歷史" },
    { path: "/events", label: "校慶活動" },
    { path: "/alumni", label: "校友專區" },
    { path: "/media", label: "影音專區" },
    { path: "/contact", label: "聯絡我們" },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b-4 border-primary sticky top-0 z-50 backdrop-blur-sm shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={`${BASE_URL}school-name-transparent.png`} alt="臺北市信義區三興國民學七十週年校慶羅网站" className="h-16 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                variant={currentPath === item.path ? "default" : "ghost"}
                className="font-bold rounded-full hover:scale-105 transition-transform"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                variant={currentPath === item.path ? "default" : "ghost"}
                className="w-full justify-start font-medium"
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
