import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, ExternalLink, ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import alumniFolders from "@/data/alumniFolders";

export default function Alumni() {
  const [expandedGrade, setExpandedGrade] = useState<number | null>(null);

  const alumni = [
    { name: "費鴻泰", grade: "12屆", achievement: "立法委員、臺北市議員", field: "政治", photo: "/alumni-fei-hongtai.jpg" },
    { name: "周錫瑋", grade: "13屆", achievement: "前新北市長、前臺北縣長", field: "政治", photo: "/alumni-zhou-xiwei.jpg" },
    { name: "包偉銘", grade: "6屆之10班", achievement: "財經節目主持人、歌手、音樂創作者", field: "娛樂", photo: "/alumni-bao-weiming.jpg" },
    { name: "伍婉華", grade: "6屆之10班", achievement: "氣象學家、交通部中央氣象署氣象預報中心簡任技正", field: "氣象科學", photo: null },
    { name: "簡余晏", grade: "15屆", achievement: "台北市議員、觀傳局長、作家", field: "政治、文化", photo: "/alumni-jian-yuyan.jpg" },
    { name: "包小松", grade: "6屆之4班", achievement: "歌手、組團制作人、音樂創作者", field: "娛樂", photo: "/alumni-bao-xiaosong.jpg" },
    { name: "包小柏", grade: "6屆之4班", achievement: "歌手、藝人、音樂制作人、音樂創作者", field: "娛樂", photo: "/alumni-bao-xiaobai.jpg" },
    { name: "饒慶鈴", grade: "18屆", achievement: "台東縣長", field: "政治", photo: null },
    { name: "黃乃輝", grade: "6屆之13班", achievement: "立法委員、臺北市政府教育局副局長", field: "政治、教育", photo: null },
    { name: "胡瓏貿", grade: "20屆", achievement: "松山高中籃球隊，帶領球隊達成HBL三連霸", field: "體育", photo: null },
  ];

  // 生成第12屆到第69屆的資料
  // 第69屆 = 2026年，第68屆 = 2025年，第67屆 = 2024年
  const generateGraduationYears = () => {
    const grades = [];
    for (let grade = 12; grade <= 69; grade++) {
      // 根據第70屆=2027年計算，graduationYear = 2027 - (70 - grade) = 1957 + grade
      const graduationYear = 1957 + grade;
      
      // 第17屆有實際照片，14個班
      if (grade === 17) {
        const classes = [];
        for (let classNum = 1; classNum <= 14; classNum++) {
          classes.push({
            className: `${classNum}班`,
            photoUrl: `/alumni/grade17/class-${classNum}.jpg`,
          });
        }
        grades.push({
          grade,
          year: graduationYear,
          classes,
        });
      } else {
        const classCount = Math.floor(Math.random() * 6) + 5; // 5-10個班
        const classes = [];
        for (let classNum = 1; classNum <= classCount; classNum++) {
          classes.push({
            className: `${classNum}班`,
            // 預留照片上傳位置，目前使用佔位圖
            photoUrl: null,
          });
        }
        grades.push({
          grade,
          year: graduationYear,
          classes,
        });
      }
    }
    return grades.reverse(); // 最新的在前面
  };

  const graduationData = generateGraduationYears();

  const toggleGrade = (grade: number) => {
    setExpandedGrade(expandedGrade === grade ? null : grade);
  };

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

      {/* Alumni Photo Folders Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                📁 歷屆照片資料夾
              </h2>
              <p className="text-lg text-muted-foreground">點擊以在新分頁開啟對應屆別的照片資料夾</p>
            </div>

            {alumniFolders.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {alumniFolders.map((folder) => (
                  <a
                    key={folder.id}
                    href={folder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`開啟${folder.label}照片資料夾`}
                    title={`開啟${folder.label}照片資料夾`}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg"
                  >
                    {folder.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link w-4 h-4 ml-2"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">尚無可顯示的屆別</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-accent/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            🌟 傑出校友介紹
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            他們在政治、教育、娛樂、體育等各領域繼續發光發熱，為母校爭光。
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {alumni.map((person, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-transparent hover:border-primary rounded-3xl overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center overflow-hidden">
                    {person.photo ? (
                      <img 
                        src={person.photo} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Award className="w-20 h-20 text-secondary/40" />
                    )}
                  </div>
                  <div className="p-4 space-y-3">
                    <CardTitle className="text-center text-xl font-black">{person.name}</CardTitle>
                    <CardDescription className="text-center space-y-2">
                      <Badge variant="outline" className="text-xs px-3 py-1 rounded-full border-2">
                        第{person.grade}
                      </Badge>
                      <p className="text-sm font-semibold text-foreground leading-relaxed min-h-[60px]">
                        {person.achievement}
                      </p>
                      <Badge className="bg-gradient-to-r from-secondary to-primary text-white border-0">
                        {person.field}
                      </Badge>
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">畢業紀念冊</h2>
              <p className="text-lg text-muted-foreground">查看歷屆畢業紀念冊，重溫美好回憶（第12屆～第89屆）</p>
            </div>

            <div className="space-y-4">
              {graduationData.map((gradeData) => (
                <Card key={gradeData.grade} className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-secondary/5 transition-colors"
                    onClick={() => toggleGrade(gradeData.grade)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                          第{gradeData.grade}屆
                        </Badge>
                        <div>
                          <CardTitle className="text-xl">畢業年份：{gradeData.year}年</CardTitle>
                          <CardDescription className="mt-1">共{gradeData.classes.length}個班級</CardDescription>
                        </div>
                      </div>
                      {expandedGrade === gradeData.grade ? (
                        <ChevronUp className="w-6 h-6 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                  
                  {expandedGrade === gradeData.grade && (
                    <CardContent className="pt-0 pb-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                        {gradeData.classes.map((classData, index) => (
                          <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4 space-y-3">
                              <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center overflow-hidden">
                                {classData.photoUrl ? (
                                  <img 
                                    src={classData.photoUrl} 
                                    alt={`第${gradeData.grade}屆${classData.className}合照`}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="text-center space-y-2">
                                    <ImageIcon className="w-8 h-8 text-muted-foreground mx-auto" />
                                    <p className="text-xs text-muted-foreground">待上傳照片</p>
                                  </div>
                                )}
                              </div>
                              <p className="text-center font-semibold">{classData.className}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                如需上傳畢業照片，請聯絡學校行政人員
              </p>
              <Button variant="outline" size="lg">
                聯絡我們
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
