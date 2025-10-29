import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ExternalLink } from "lucide-react";

export default function Merch() {
  const products = [
    { name: "70週年紀念T恤", price: "NT$ 500", category: "服飾", color: "accent" },
    { name: "校慶紀念徽章", price: "NT$ 150", category: "配件", color: "primary" },
    { name: "紀念馬克杯", price: "NT$ 300", category: "生活用品", color: "secondary" },
    { name: "校慶紀念筆記本", price: "NT$ 200", category: "文具", color: "accent" },
    { name: "限量紀念旗幟", price: "NT$ 800", category: "收藏品", color: "primary" },
    { name: "鑰匙圈組合", price: "NT$ 180", category: "配件", color: "secondary" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <ShoppingBag className="w-4 h-4 mr-2" />紀念品商店
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">限量<span className="text-primary">紀念品</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">珍藏70週年的美好回憶</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className="mb-2">{product.category}</Badge>
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">前往訂購<ExternalLink className="w-4 h-4 ml-2" /></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
