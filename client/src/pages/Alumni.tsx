import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, ExternalLink, ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function Alumni() {
  const [expandedGrade, setExpandedGrade] = useState<number | null>(null);

  const alumni = [
    { name: "張三", year: "1975", achievement: "知名企業家", field: "商業" },
    { name: "李四", year: "1985", achievement: "醫學教授", field: "醫學" },
    { name: "王五", year: "1995", achievement: "藝術家", field: "藝術" },
    { name: "趙六", year: "2005", achievement: "科技創業家", field: "科技" },
  ];

  // 生成第12屆到第89屆的資料
  const generateGraduationYears = () => {
    const startYear = 1955; // 學校創立年份
    const grades = [];
    for (let grade = 12; grade <= 89; grade++) {
      const graduationYear = startYear + grade - 1;
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
