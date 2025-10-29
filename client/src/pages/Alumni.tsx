import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, ExternalLink } from "lucide-react";

export default function Alumni() {
  const alumni = [
    { name: "張三", year: "1975", achievement: "知名企業家", field: "商業" },
    { name: "李四", year: "1985", achievement: "醫學教授", field: "醫學" },
    { name: "王五", year: "1995", achievement: "藝術家", field: "藝術" },
    { name: "趙六", year: "2005", achievement: "科技創業家", field: "科技" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Users className="w-4 h-4 mr-2" />校友專區
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">傑出<span className="text-secondary">校友</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">三興國小培育了無數優秀人才，他們在各領域發光發熱。</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">傑出校友介紹</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-12 h-12 text-secondary" />
                  </div>
                  <CardTitle className="text-center text-xl">{person.name}</CardTitle>
                  <CardDescription className="text-center space-y-1">
                    <p className="font-semibold text-secondary">{person.achievement}</p>
                    <p>畢業年份：{person.year}</p>
                    <Badge variant="outline">{person.field}</Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-secondary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">畢業紀念冊</h2>
            <p className="text-lg text-muted-foreground">查看歷屆畢業紀念冊，重溫美好回憶</p>
            <Button size="lg">前往瀏覽<ExternalLink className="w-4 h-4 ml-2" /></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
