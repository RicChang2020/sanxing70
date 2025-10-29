import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Building } from "lucide-react";

export default function History() {
  const timeline = [
    { year: "1955", title: "學校創立", description: "三興國小正式成立，開啟教育新篇章", icon: Building, color: "bg-accent" },
    { year: "1965", title: "校舍擴建", description: "新建教學大樓，提供更好的學習環境", icon: Building, color: "bg-accent" },
    { year: "1975", title: "20週年校慶", description: "舉辦盛大慶祝活動，校友齊聚一堂", icon: Users, color: "bg-secondary" },
    { year: "1985", title: "設施現代化", description: "引進電腦教室，開啟資訊教育新紀元", icon: Building, color: "bg-accent" },
    { year: "1995", title: "40週年校慶", description: "校園全面翻新，設備更新升級", icon: Users, color: "bg-secondary" },
    { year: "2005", title: "50週年金禧校慶", description: "舉辦大型校友回娘家活動，超過千人參與", icon: Users, color: "bg-secondary" },
    { year: "2015", title: "鑽石校慶", description: "60週年校慶，啟動校園智慧化計畫", icon: Users, color: "bg-secondary" },
    { year: "2025", title: "70週年白金校慶", description: "七十載風華，邁向教育新里程", icon: Calendar, color: "bg-primary" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent/10 via-accent/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Calendar className="w-4 h-4 mr-2" />學校歷史
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">七十年的<span className="text-accent">光輝歲月</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">從1955年到2025年，三興國小走過了七十年的輝煌歷程。</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">重要里程碑</h2>
          <div className="max-w-5xl mx-auto grid gap-6">
            {timeline.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-lg font-bold">{item.year}</Badge>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base ml-15">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
