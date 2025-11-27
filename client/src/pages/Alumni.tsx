import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ExternalLink } from "lucide-react";
import { alumniFolders } from "@/data/alumniFolders";

export default function Alumni() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Users className="w-4 h-4 mr-2" />校友專區
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              傑出<span className="text-secondary">校友</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              歡迎各屆校友回顧母校點滴
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            歷屆校友相簿
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniFolders.map((folder) => (
              <a
                key={folder.id}
                href={folder.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                    <Users className="w-16 h-16 text-secondary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {folder.label}
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                    </CardTitle>
                    <CardDescription>點擊開啟 Google Drive 相簿</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
