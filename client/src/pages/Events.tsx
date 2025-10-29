import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Music, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Events() {
  const events = [
    { title: "三代同興校友回娘家", date: "2025年12月15日", time: "09:00-17:00", location: "三興國小校園", icon: Users, color: "bg-secondary", link: "/events/homecoming" },
    { title: "體育表演會", date: "2025年12月20日", time: "08:00-12:00", location: "三興國小操場", icon: Trophy, color: "bg-accent", link: "/events/sports" },
    { title: "校慶音樂會", date: "2025年12月28日", time: "19:00-21:00", location: "三興國小禮堂", icon: Music, color: "bg-primary", link: "#" },
    { title: "70週年慶祝大會", date: "2025年12月31日", time: "10:00-12:00", location: "三興國小禮堂", icon: Calendar, color: "bg-primary", link: "#" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Calendar className="w-4 h-4 mr-2" />校慶活動
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">精彩<span className="text-primary">活動</span>等你參與</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">70週年校慶系列活動，邀請您一同參與這個特別的時刻。</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">活動列表</h2>
          <div className="max-w-5xl mx-auto grid gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-16 h-16 rounded-full ${event.color} flex items-center justify-center flex-shrink-0`}>
                        <event.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                        <div className="space-y-1 text-muted-foreground">
                          <p className="flex items-center gap-2"><Calendar className="w-4 h-4" />{event.date}</p>
                          <p>時間：{event.time}</p>
                          <p>地點：{event.location}</p>
                        </div>
                      </div>
                    </div>
                    <Link href={event.link}>
                      <Button>查看詳情<ChevronRight className="w-4 h-4 ml-1" /></Button>
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
