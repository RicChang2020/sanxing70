import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, ExternalLink, ChevronDown, ChevronUp, Image as ImageIcon, Facebook, MessageCircle } from "lucide-react";
import { useState, useMemo, useCallback } from "react";

export default function Alumni() {
  const [selectedGrade, setSelectedGrade] = useState<number>(12);
  const [selectedClass, setSelectedClass] = useState<number>(1);

  const alumni = [
    { name: "饒慶鈴", grade: "18屆", achievement: "現任臺東縣縣長", field: "政治", photo: "/alumni-rao-qingling.jpg" },    { name: "胡疓貲", grade: "20屆", achievement: "2015年世大運男籃賽中華臺北代表隊選手、2018年亞運男籃賽中華臺北代表隊選手、2025年亞洲盃男籃賽中華臺北代表隊選手。現為TTPBL联盟全家高雄海神球員", field: "體育", photo: "/alumni-hu-longmao.jpg" },
    { name: "費鴻泰", grade: "12屆", achievement: "立法委員、臺北市議員", field: "政治", photo: "/alumni-fei-hongtai.jpg" },
    { name: "周錫瑋", grade: "13屆", achievement: "前新北市長、前臺北縣長", field: "政治", photo: "/alumni-zhou-xiwei.jpg" },
    { name: "簡余晏", grade: "15屆", achievement: "前台北市議員、前台北市觀傳局長", field: "政治、文化", photo: "/alumni-jian-yuyan.jpg" },
    { name: "伍婉華", grade: "6屆之10班", achievement: "氣象學家、交通部中央氣象署氣象預報中心簡任技正", field: "氣象科學", photo: "/alumni-wu-wanhua.jpg" },
    { name: "黃乃輝", grade: "6屆之13班", achievement: "生命鬥士，榮獲1997年十大傑出青年", field: "公益", photo: "/alumni-huang-naihui.jpg" },
    { name: "包小松", grade: "6屆之4班", achievement: "歌手、組團制作人、音樂創作者", field: "娛樂", photo: "/alumni-bao-xiaosong.jpg" },
    { name: "包小柏", grade: "6屆之4班", achievement: "歌手、藝人、音樂制作人、音樂創作者", field: "娛樂", photo: "/alumni-bao-xiaobai.jpg" },
    { name: "包偉銘", grade: "6屆之10班", achievement: "財經節目主持人、歌手、音樂創作者", field: "娛樂", photo: "/alumni-bao-weiming.jpg" },
  ];

  // 各屆班級數配置
  const gradeClassCount: {[key: number]: number} = {
    12: 14, 13: 6, 14: 13, 15: 8, 17: 5, 18: 7, 19: 9, 20: 6, 21: 10, 22: 8,
    23: 7, 24: 9, 25: 9, 26: 10, 27: 10, 28: 10, 29: 10, 30: 9, 31: 9, 32: 8,
    33: 5, 34: 7, 35: 8, 36: 8, 37: 9, 38: 5, 39: 5, 40: 10, 41: 7, 42: 8,
    43: 10, 44: 6, 45: 8, 46: 9, 47: 6, 48: 10, 49: 7, 50: 5, 51: 8, 52: 6,
    53: 10, 54: 7, 55: 9, 56: 8, 57: 5, 58: 5, 59: 9, 60: 8, 61: 7, 62: 7,
    63: 10, 64: 8, 65: 6, 66: 8, 67: 7, 68: 8, 69: 7,
  };

  // 校園媒體庫主資料夾ID
  const MEDIA_LIBRARY_ID = "1V_3MhVOx0AY0mdVF1DPT4hyDN9HXlxz4";

  // 生成Google Drive資料夾連結
  const generateGoogleDriveLink = (grade: number, classNum: number) => {
    // 格式：https://drive.google.com/drive/folders/{folderId}
    // 這裡使用簡化的連結結構，實際需要根據Google Drive的實際資料夾ID
    return `https://drive.google.com/drive/folders/${MEDIA_LIBRARY_ID}`;
  };

  // 獲取該屆的班級數
  const classCount = useMemo(() => {
    return gradeClassCount[selectedGrade] || 5;
  }, [selectedGrade]);

  // 獲取該班的照片（暫時使用佔位圖）
  const getClassPhoto = (grade: number, classNum: number) => {
    if (grade === 12) {
      // 第12屆有實際照片
      return `/alumni/class-18/18-${600 + classNum}.jpg`;
    }
    if (grade === 14) {
      // 第14屆有實際照片
      return `/alumni/grade14/class-${classNum}.jpg`;
    }
    return null;
  };

  const classPhoto = getClassPhoto(selectedGrade, selectedClass);

  const handleGradeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGrade = parseInt(e.target.value, 10);
    setSelectedGrade(newGrade);
    setSelectedClass(1);
  }, []);

  const handleClassChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newClass = parseInt(e.target.value, 10);
    setSelectedClass(newClass);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Users className="w-4 h-4 mr-2" />校友專區
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">三興<span className="text-secondary">風雲榜</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">他們在政治、教育、娛樂、體育等各領域繼續發光發熱，為母校爭光。</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-accent/5">
        <div className="container">

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
                    <div className="flex justify-center gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
                        onClick={() => {
                          const shareUrl = window.location.href;
                          const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=三興國小傑出校友：${person.name}`;
                          window.open(facebookUrl, '_blank', 'width=600,height=400');
                        }}
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-2 border-green-500 text-green-500 hover:bg-green-50"
                        onClick={() => {
                          const shareUrl = window.location.href;
                          const message = `三興國小傑出校友：${person.name} - ${person.achievement}`;
                          const lineUrl = `https://line.me/R/msg/0?${encodeURIComponent(message)}`;
                          window.open(lineUrl, '_blank');
                        }}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
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
              <p className="text-lg text-muted-foreground">查看歷屆畢業紀念冊，重溫美好回憶</p>
            </div>

            {/* 下拉式選單區域 */}
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Grade 下拉選單 */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">選擇屆別</label>
                    <select
                      value={String(selectedGrade)}
                      onChange={handleGradeChange}
                      className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-primary"
                    >
                      {Array.from({ length: 58 }, (_, i) => 12 + i).map((grade) => (
                        <option key={`grade-${grade}`} value={String(grade)}>
                          第{grade}屆 ({1957 + grade}年)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Class 下拉選單 */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">選擇班級</label>
                    <select
                      value={String(selectedClass)}
                      onChange={handleClassChange}
                      className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-primary"
                    >
                      {Array.from({ length: classCount }, (_, i) => i + 1).map((classNum) => (
                        <option key={`class-${classNum}`} value={String(classNum)}>
                          {classNum}班
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 畢業紀念冊雲端連結 */}
                <div className="mt-6">
                  <a
                    href="https://reurl.cc/AbnmGd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-secondary to-primary hover:shadow-lg">
                      畢業紀念冊雲端連結
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>



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
