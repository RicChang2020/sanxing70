import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Building, School, Award, Sparkles } from "lucide-react";

export default function History() {
  const timeline = [
    { 
      year: "民國40年", 
      date: "1951年12月",
      title: "學校創立", 
      description: "本校於民國40年12月奉准成立為興雅國校三張犁分班。", 
      icon: School, 
      color: "bg-pink-400" 
    },
    { 
      year: "民國43年", 
      date: "1954年5月",
      title: "改稱分校", 
      description: "興雅國校三張犁分班改稱分校。", 
      icon: Building, 
      color: "bg-sky-400" 
    },
    { 
      year: "民國44年", 
      date: "1955年8月",
      title: "獨立設校 第一任校長", 
      description: "奉令獨立，派席慧珍校長為首任校長，並策劃歸併校地，興建校舍，始具雛形。本校因座落三張犁，並為紀念原校興雅而命名三興國民學校。", 
      icon: Sparkles, 
      color: "bg-yellow-400" 
    },
    { 
      year: "民國49年", 
      date: "1960年2月",
      title: "第二任校長", 
      description: "市府派林讚後校長為第二任校長。", 
      icon: Users, 
      color: "bg-green-400" 
    },
    { 
      year: "民國50年", 
      date: "1961年2月",
      title: "第三任校長", 
      description: "派耿玉潔校長接任第三任校長。", 
      icon: Users, 
      color: "bg-pink-400" 
    },
    { 
      year: "民國54年", 
      date: "1965年9月",
      title: "校舍改建與成立光復國小", 
      description: "派陳展淇校長接任第四任校長，拆舊換新改建校舍，並於57年3月撥出四、五年級學生，成立光復國小。", 
      icon: Building, 
      color: "bg-sky-400" 
    },
    { 
      year: "民國57年", 
      date: "1968年",
      title: "更名為松山區三興國小", 
      description: "本校更名為臺北市松山區三興國民小學。", 
      icon: School, 
      color: "bg-yellow-400" 
    },
    { 
      year: "民國58年", 
      date: "1969年",
      title: "第五任校長", 
      description: "派彭瑞卓接任第五任校長，成立教職員工托兒所，重新劃分學區，撥交吳興國小22班。", 
      icon: Users, 
      color: "bg-green-400" 
    },
    { 
      year: "民國61年", 
      date: "1972年8月",
      title: "第六任校長", 
      description: "派鄭美俐校長接任第六任校長，改建校門、增設校舍、設立專科教室，重整校風。", 
      icon: Building, 
      color: "bg-pink-400" 
    },
    { 
      year: "民國68年", 
      date: "1979年8月",
      title: "第七任校長", 
      description: "市府派郭國義校長為第七任校長，拆舊校舍改建為四樓校舍。", 
      icon: Users, 
      color: "bg-sky-400" 
    },
    { 
      year: "民國69年", 
      date: "1980年2月",
      title: "資優教育實驗", 
      description: "奉教育局指定辦理資賦優異兒童教育實驗教學（分散式）。", 
      icon: Award, 
      color: "bg-yellow-400" 
    },
    { 
      year: "民國76年", 
      date: "1987年8月",
      title: "創立附設幼稚園", 
      description: "奉准創立附設幼稚園。", 
      icon: School, 
      color: "bg-green-400" 
    },
    { 
      year: "民國77年", 
      date: "1988年2月",
      title: "第八任校長", 
      description: "市府派張瑞福校長為第八任校長。", 
      icon: Users, 
      color: "bg-pink-400" 
    },
    { 
      year: "民國79年", 
      date: "1990年3月12日",
      title: "更名為信義區三興國小", 
      description: "本校更名為臺北市信義區三興國民小學。", 
      icon: Sparkles, 
      color: "bg-sky-400" 
    },
    { 
      year: "民國80年", 
      date: "1991年2月",
      title: "第九任校長", 
      description: "市府派黃濟德校長為第九任校長。", 
      icon: Users, 
      color: "bg-yellow-400" 
    },
    { 
      year: "民國85年", 
      date: "1996年8月",
      title: "第十任校長", 
      description: "市府派江國雄校長為第十任校長。", 
      icon: Users, 
      color: "bg-green-400" 
    },
    { 
      year: "民國90年", 
      date: "2001年8月",
      title: "第十一任校長", 
      description: "經校長遴選，劉永泉校長為第十一任校長，94年8月經校長遴選連任。", 
      icon: Users, 
      color: "bg-pink-400" 
    },
    { 
      year: "民國95年", 
      date: "2006年8月",
      title: "第十二任校長", 
      description: "經校長遴選，江新妹校長為第十二任校長。", 
      icon: Users, 
      color: "bg-sky-400" 
    },
    { 
      year: "民國99年", 
      date: "2010年8月",
      title: "第十三任校長", 
      description: "經校長遴選，倪雨平校長為第十三任校長，103年8月經校長遴選連任。", 
      icon: Users, 
      color: "bg-yellow-400" 
    },
    { 
      year: "民國105年", 
      date: "2016年8月",
      title: "第十四任校長", 
      description: "經校長遴選，梁靜珊校長為第十四任校長。", 
      icon: Users, 
      color: "bg-green-400" 
    },
    { 
      year: "民國108年", 
      date: "2019年8月",
      title: "第十五任校長", 
      description: "經校長遴選，李莉莉校長為第十五任校長，112年8月經校長遴選連任。", 
      icon: Users, 
      color: "bg-sky-400" 
    },
    { 
      year: "民國114年", 
      date: "2025年11月29日",
      title: "70週年校慶", 
      description: "三興國小迎來70週年校慶，回顧七十年的輝煌歷史，展望未來，共同慶祝這個重要的里程碑！", 
      icon: Award, 
      color: "bg-gradient-to-r from-pink-400 via-yellow-400 to-sky-400" 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-sky-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-400 via-yellow-400 to-sky-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-pink-600 hover:bg-white text-lg px-6 py-2 rounded-full border-4 border-white shadow-lg">
            🏫 學校歷史
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            三興國小<span className="text-yellow-200">70年</span>歷史
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold drop-shadow">
            從民國40年創校至今，三興國小走過了七十個年頭，見證了無數學子的成長與蛻變。
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* 時間軸線 */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-300 via-yellow-300 to-sky-300 rounded-full transform md:-translate-x-1/2"></div>
            
            {/* 時間軸項目 */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                    {/* 圖標 */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0 z-10">
                      <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-125 hover:rotate-12 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* 內容卡片 */}
                    <div className={`ml-28 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                      <Card className="p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 bg-white border-4 border-gray-200 rounded-3xl">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-base px-4 py-1 rounded-full border-2 border-white shadow-lg">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            {item.year}
                          </Badge>
                          <span className="text-sm text-gray-500 font-bold">{item.date}</span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">{item.description}</p>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 底部裝飾 */}
      <div className="bg-gradient-to-r from-pink-200 via-yellow-200 to-sky-200 py-12 text-center">
        <p className="text-2xl font-black text-gray-700">
          🎉 七十年的輝煌歷史，共同見證三興的成長！ 🎉
        </p>
      </div>
    </div>
  );
}
