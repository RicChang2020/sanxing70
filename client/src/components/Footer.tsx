import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { BASE_URL } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={`${BASE_URL}logo.png`} alt="三興國小70週年" className="w-16 h-16 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">三興國小</span>
                <span className="text-sm text-muted-foreground">70週年校慶</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              三興七十載，舞動新風采。共同慶祝三興國小70週年校慶，回顧歷史，展望未來。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">快速連結</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                首頁
              </a>
              <a href="/history" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                學校歷史
              </a>
              <a href="/events" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                校慶活動
              </a>
              <a href="/alumni" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                校友專區
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">聯絡資訊</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>台北市信義區基隆路二段99號</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
                <span>(02) 2737-4564</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>sanxing70@school.edu.tw</span>
              </div>
              <Button variant="outline" size="sm" className="mt-2">
                學校官網
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} 三興國小70週年校慶籌備委員會 版權所有
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                三興國小70週年校慶
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">隱私政策</a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">使用條款</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
