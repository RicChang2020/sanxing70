import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Building, School, Award } from "lucide-react";

export default function History() {
  const timeline = [
    { 
      year: "民國44年", 
      date: "1955年8月",
      title: "學校創立", 
      description: "本校於民國44年12月奉准成立為興雅國校三興分校，43年5月改稱分校。民國45年2月派陳展琪校長接任第三任校長，繼續增建教室，課求校務發展。民國49年8月始略具雛形。", 
      icon: School, 
      color: "bg-primary" 
    },
    { 
      year: "民國49年", 
      date: "1960年2月",
      title: "獨立設校", 
      description: "民國49年2月市府派林讚後校長為第二任校長，並為紀念原校長興雅而命名三興國民學校。", 
      icon: Building, 
      color: "bg-secondary" 
    },
    { 
      year: "民國50年", 
      date: "1961年1月",
      title: "派駐邱美利校長", 
      description: "民國50年1月派駐邱美利校長接任第三任校長。", 
      icon: Users, 
      color: "bg-accent" 
    },
    { 
      year: "民國54年", 
      date: "1965年9月",
      title: "成立光復國小", 
      description: "民國54年9月派陳展琪校長接任第四任校長，繼續增建教室，課求校務發展，並於57年2月撥出44、45年級學生，成立光復國小。", 
      icon: Building, 
      color: "bg-primary" 
    },
    { 
      year: "民國57年", 
      date: "1968年",
      title: "實施國民教育", 
      description: "民國57年實施國民教育，本校更名為台北市信義區三興國民小學。", 
      icon: School, 
      color: "bg-secondary" 
    },
    { 
      year: "民國61年", 
      date: "1972年",
      title: "小一新生班", 
      description: "民國61年8月派鄭美利校長接任第五任校長，改建校門，增建校舍，設立專科教室，重新劃分學區，撤交與興雅國校。", 
      icon: Users, 
      color: "bg-accent" 
    },
    { 
      year: "民國65年", 
      date: "1976年",
      title: "整校風貌", 
      description: "民國65年8月協助國立編譯館編理「生活與倫理」課本教材工作，整校風貌，步入新境。", 
      icon: Award, 
      color: "bg-primary" 
    },
    { 
      year: "民國68年", 
      date: "1979年",
      title: "為四樓校舍", 
      description: "民國68年8月市府派郭國義校長為第七任校長，為校舍建築長程計畫，拆除舊校舍改建。", 
      icon: Building, 
      color: "bg-secondary" 
    },
    { 
      year: "民國69年", 
      date: "1980年2月",
      title: "派張思穎校長", 
      description: "民國69年2月府派張思穎校長為第八任校長，準創立附設幼稚園，推理資優教育實驗。", 
      icon: Users, 
      color: "bg-accent" 
    },
    { 
      year: "民國70年", 
      date: "1981年",
      title: "設立幼稚園", 
      description: "民國70年8月奉准創立附設幼稚園。", 
      icon: School, 
      color: "bg-primary" 
    },
    { 
      year: "民國78年", 
      date: "1989年",
      title: "派黃寶嬌校長", 
      description: "民國78年8月府派黃寶嬌校長為第九任校長，推理資優教育實驗，校舍大四樓三平方公尺。", 
      icon: Users, 
      color: "bg-secondary" 
    },
    { 
      year: "民國86年", 
      date: "1997年",
      title: "校地面積擴增", 
      description: "民國86年3月府派黃寶嬌校長為第九任校長，校舍大四樓三平方公尺，運動場七千二百平方公尺，道路綠地六四五平方公尺。", 
      icon: MapPin, 
      color: "bg-accent" 
    },
    { 
      year: "民國94年", 
      date: "2005年",
      title: "50週年金禧校慶", 
      description: "舉辦大型校友回娘家活動，校友齊聚一堂。", 
      icon: Award, 
      color: "bg-primary" 
    },
    { 
      year: "民國104年", 
      date: "2015年",
      title: "60週年鑽石校慶", 
      description: "啟動校園智慧化計畫，邁向教育新紀元。", 
      icon: Award, 
      color: "bg-secondary" 
    },
    { 
      year: "民國114年", 
      date: "2025年",
      title: "70週年白金校慶", 
      description: "七十載風華，舞動新風采，邁向教育新里程。", 
      icon: Calendar, 
      color: "bg-accent" 
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent/30 via-secondary/20 to-primary/20 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-8 py-3 rounded-full shadow-lg">
              <Calendar className="w-4 h-4 mr-2" />學校歷史
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
              七十年的<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">光輝歲月</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              從民國44年到民國114年，三興國小走過了七十年的輝煌歷程，見證無數學子的成長。
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            📚 學校沿革
          </h2>
          <div className="max-w-5xl mx-auto grid gap-6">
            {timeline.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all hover:-translate-y-1 border-4 border-transparent hover:border-primary rounded-3xl"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 shadow-xl transform hover:rotate-12 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="outline" className="text-base font-bold px-4 py-1 rounded-full border-2">
                          {item.year}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <CardTitle className="text-2xl font-black">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </div>
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
