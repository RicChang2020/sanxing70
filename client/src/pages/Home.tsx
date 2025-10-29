import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Image as ImageIcon, Award, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Home() {
  // 倒數計時器狀態
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 校慶日期設定為2025年12月31日
  const celebrationDate = new Date("2025-12-31T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = celebrationDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const newsItems = [
    { date: "2025-10-25", title: "70週年校慶活動報名開始", badge: "最新" },
    { date: "2025-10-20", title: "三代同興校友回娘家活動公告", badge: "活動" },
    { date: "2025-10-15", title: "體育表演會節目徵集中", badge: "徵集" },
    { date: "2025-10-10", title: "校慶紀念品預購開跑", badge: "商品" },
  ];

  const highlights = [
    {
      icon: Calendar,
      title: "校慶活動",
      description: "精彩活動等你參與",
      link: "/events",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "校友專區",
      description: "校友回娘家報名",
      link: "/alumni",
      color: "bg-secondary",
    },
    {
      icon: ImageIcon,
      title: "影音專區",
      description: "回顧精彩瞬間",
      link: "/media",
      color: "bg-secondary",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              70週年校慶
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              三興國小<span className="text-primary">70</span>載風華
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                同心同慶迎新篇
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              七十年的歲月，見證了無數學子的成長。讓我們一起回顧過去，展望未來，共同慶祝這個特別的時刻。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button size="lg" className="text-lg px-8 py-6">
                  立即報名
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/history">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  探索歷史
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">距離校慶還有</h2>
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">{timeLeft.days}</div>
                <div className="text-sm md:text-base opacity-90">天</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm md:text-base opacity-90">時</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm md:text-base opacity-90">分</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm md:text-base opacity-90">秒</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">最新消息</h2>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">{item.badge}</Badge>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">快速導覽</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Link key={index} href={item.link}>
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-center text-secondary">校長賀詞</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-48 h-48 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-6xl">👨‍🏫</div>
                  </div>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      親愛的校友、師生及家長們：
                    </p>
                    <p>
                      在這個特別的時刻，三興國小迎來了70週年校慶。七十年來，我們見證了無數學子的成長，也培育了許多優秀的人才。這份榮耀屬於每一位曾經在三興國小學習、工作的師生。
                    </p>
                    <p>
                      讓我們一起回顧過去的輝煌，展望未來的美好，共同為三興國小的下一個70年而努力！
                    </p>
                    <p className="font-semibold text-foreground">
                      — 三興國小 校長 敬上
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
