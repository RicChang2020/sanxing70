import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Homecoming() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Users className="w-4 h-4 mr-2" />校友活動
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">三代同興<span className="text-secondary">校友回娘家</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">邀請歷屆校友回到母校，重溫美好時光</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-secondary/5">
              <CardHeader>
                <CardTitle className="text-3xl mb-6">活動資訊</CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">活動日期</p>
                      <p className="text-muted-foreground">2025年12月15日（星期日）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">活動時間</p>
                      <p className="text-muted-foreground">09:00 - 17:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">活動地點</p>
                      <p className="text-muted-foreground">三興國小校園</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">參加對象</p>
                      <p className="text-muted-foreground">歷屆校友及家屬</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">活動內容</CardTitle>
                <CardDescription className="text-base space-y-3">
                  <p>• 校園導覽：重溫校園的每一個角落</p>
                  <p>• 班級聚會：與老同學敘舊聯誼</p>
                  <p>• 師生座談：與恩師重逢交流</p>
                  <p>• 懷舊展覽：回顧學校歷史與珍貴照片</p>
                  <p>• 聯誼餐會：共享美食，暢談往事</p>
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6">
                立即報名<ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">報名截止日期：2025年12月1日</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
