import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Image as ImageIcon } from "lucide-react";

export default function Media() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Video className="w-4 h-4 mr-2" />影音專區
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">精彩<span className="text-secondary">瞬間</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">記錄校慶活動的每一個精彩時刻</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">影片專區</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                  <Video className="w-16 h-16 text-secondary" />
                </div>
                <CardHeader>
                  <CardTitle>校慶活動影片 {item}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-secondary/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">照片集錦</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-secondary" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
