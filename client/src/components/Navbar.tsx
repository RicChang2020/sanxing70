import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { APP_TITLE } from "@/const";

export default function Navbar() {
  const [location] = useLocation();
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
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.png" alt="三興國小70週年" className="w-14 h-14 object-contain transform hover:scale-110 hover:rotate-6 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">{APP_TITLE}</span>
                <span className="text-xs font-semibold text-secondary">Sanxing Elementary School</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "default" : "ghost"}
                  className="font-bold rounded-full hover:scale-105 transition-transform"
                >
                  {item.label}
                </Button>
              </Link>
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
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "default" : "ghost"}
                  className="w-full justify-start font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
