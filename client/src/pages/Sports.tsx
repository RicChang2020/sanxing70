import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, MapPin, Clock, Users } from "lucide-react";

export default function Sports() {
  const schedule = [
    { time: "08:00-08:30", event: "開幕典禮", participants: "全校師生" },
    { time: "08:30-09:30", event: "團體操表演", participants: "各年級學生" },
    { time: "09:30-10:30", event: "田徑競賽", participants: "選手" },
    { time: "10:30-11:30", event: "趣味競賽", participants: "親子組" },
    { time: "11:30-12:00", event: "頒獎典禮", participants: "全校師生" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent/10 via-accent/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Trophy className="w-4 h-4 mr-2" />體育活動
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">70週年<span className="text-accent">體育表演會</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">展現活力與團隊精神的精彩時刻</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-accent/5">
              <CardHeader>
                <CardTitle className="text-3xl mb-6">活動資訊</CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">活動日期</p>
                      <p className="text-muted-foreground">2025年12月20日（星期六）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">活動時間</p>
                      <p className="text-muted-foreground">08:00 - 12:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">活動地點</p>
                      <p className="text-muted-foreground">三興國小操場</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">參加對象</p>
                      <p className="text-muted-foreground">全校師生及家長</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-6">活動流程</CardTitle>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-24 font-semibold text-accent">{item.time}</div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{item.event}</p>
                        <p className="text-sm text-muted-foreground">{item.participants}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">注意事項</CardTitle>
                <CardDescription className="text-base space-y-2">
                  <p>• 請穿著運動服裝及運動鞋</p>
                  <p>• 請自備飲用水及防曬用品</p>
                  <p>• 雨天備案：改至體育館舉行</p>
                  <p>• 家長觀賽區設於操場看台</p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
