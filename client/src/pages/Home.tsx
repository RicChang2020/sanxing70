import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Image as ImageIcon, Award, ChevronRight, Sparkles } from "lucide-react";
import { useCustomRouter } from "@/hooks/useCustomRouter";
import { useState, useEffect } from "react";
import { BASE_URL } from "@/const";

export default function Home() {
  const { navigate } = useCustomRouter();
  // 背景輪播狀態
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    { src: `${BASE_URL}school-gate.jpg`, alt: "三興國小校門" },
    { src: `${BASE_URL}campus.jpg`, alt: "三興國小校園" },
    { src: `${BASE_URL}playground.jpg`, alt: "三興國小遊樂場" },
    { src: `${BASE_URL}library.jpg`, alt: "三興國小圖書館" },
  ];

  // 倒數計時器狀態
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 校慶日期設定為114年11月29日（2025年11月29日）
  const celebrationDate = new Date("2025-11-29T00:00:00");

  // 背景輪播效果
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000); // 每10秒切換一次

    return () => clearInterval(imageTimer);
  }, []);

  // 倒數計時器
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
    { date: "2025-10-25", title: "三代同興 校友回娘家 活動報名中", badge: "最新", link: "https://docs.google.com/forms/d/e/1FAIpQLSctoGHXzRkQS9ScAre6l9t7wlE5kyF0C6V-NlOqI2dxQX86_Q/viewform?usp=header" },
    { date: "2025-11-29", title: "體育表演會", badge: "征集" },
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
      description: "傑出校友",
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* 背景圖片輪播 */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 via-yellow-100/50 to-sky-200/50"></div>
        </div>

        {/* 裝飾元素 */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse z-10"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000 z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-bounce z-10"></div>
        <div className="container relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-lg px-8 py-3 rounded-full shadow-lg animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              70週年校慶
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight transform hover:scale-105 transition-transform">
              三興<span className="text-primary drop-shadow-lg">七十載</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient">
                舞動新風采
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              七十年的歲月，見證了無數學子的成長。讓我們一起回顧過去，展望未來，共同慶祝這個特別的時刻。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div onClick={() => navigate("/history")} className="cursor-pointer">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-4 hover:border-primary transform hover:scale-110 transition-all">
                  探索歷史
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-primary/20 rounded-3xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">🎓 校長賀詞</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl border-4 border-white">
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
                      — 三興國小李莉莉校長敬上
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-12 bg-gradient-to-r from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-black drop-shadow-lg relative z-10">🎉 距離校慶還有 🎉</h2>
            <div className="grid grid-cols-4 gap-4 md:gap-8 relative z-10">
              <div className="space-y-2 bg-white/20 backdrop-blur-sm rounded-3xl p-4 md:p-6 transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-black drop-shadow-lg">{timeLeft.days}</div>
                <div className="text-sm md:text-base font-bold">天</div>
              </div>
              <div className="space-y-2 bg-white/20 backdrop-blur-sm rounded-3xl p-4 md:p-6 transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-black drop-shadow-lg">{timeLeft.hours}</div>
                <div className="text-sm md:text-base font-bold">時</div>
              </div>
              <div className="space-y-2 bg-white/20 backdrop-blur-sm rounded-3xl p-4 md:p-6 transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-black drop-shadow-lg">{timeLeft.minutes}</div>
                <div className="text-sm md:text-base font-bold">分</div>
              </div>
              <div className="space-y-2 bg-white/20 backdrop-blur-sm rounded-3xl p-4 md:p-6 transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-black drop-shadow-lg">{timeLeft.seconds}</div>
                <div className="text-sm md:text-base font-bold">秒</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gradient-to-br from-accent/20 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">📢 最新消息</h2>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <a key={index} href={item.link || "#"} target={item.link ? "_blank" : "_self"} rel="noopener noreferrer">
                  <Card className="hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-1 border-4 border-transparent hover:border-primary rounded-3xl">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{item.badge}</Badge>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                      <CardDescription>{item.date}</CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">✨ 快速導覽</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} onClick={() => navigate(item.link)} className="cursor-pointer">
                <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer h-full border-4 border-transparent hover:border-primary rounded-3xl transform hover:scale-105">
                  <CardHeader>
                    <div className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center mb-4 shadow-xl transform hover:rotate-12 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
