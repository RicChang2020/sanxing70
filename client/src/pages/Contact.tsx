import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Mail className="w-4 h-4 mr-2" />聯絡我們
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">與我們<span className="text-secondary">聯繫</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">有任何問題或建議，歡迎與我們聯繫</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-6">聯絡資訊</CardTitle>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">地址</p>
                      <p className="text-muted-foreground">台北市信義區基隆路二段99號</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">電話</p>
                      <p className="text-muted-foreground">(02) 2737-4564</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">電子郵件</p>
                      <p className="text-muted-foreground">sanxing70@school.edu.tw</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-6">意見回饋</CardTitle>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="姓名" />
                  </div>
                  <div>
                    <Input type="email" placeholder="電子郵件" />
                  </div>
                  <div>
                    <Input placeholder="主旨" />
                  </div>
                  <div>
                    <Textarea placeholder="訊息內容" rows={6} />
                  </div>
                  <Button className="w-full" size="lg">
                    送出訊息<Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
