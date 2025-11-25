import { Card } from "@/components/ui/card";

const screenshots = [
  { title: "Interactive Lessons", image: "/attached_assets/lesson_1764086592743.PNG" },
  { title: "Market Analysis", image: "/attached_assets/market_1764086592743.PNG" },
  { title: "Pattern Scanner", image: "/attached_assets/sacnner_1764086592744.PNG" },
  { title: "Trading Simulator", image: "/attached_assets/sim_1764086592744.PNG" },
  { title: "Drawing Tools", image: "/attached_assets/drawing_1764086858883.PNG" },
  { title: "Flashcards", image: "/attached_assets/flashcards_1764086858883.PNG" },
  { title: "Quiz Practice", image: "/attached_assets/quiz_1764086888488.PNG" },
];

export default function Screenshots() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-testid="text-screenshots-title">
            Beautiful, Intuitive Interface
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-screenshots-subtitle">
            Engaging visual charts and animations make learning candlestick analysis easy to remember
          </p>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center"
              data-testid={`screenshot-${index}`}
            >
              <div className="w-[280px]">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-[9/19] bg-card">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
                <p className="text-center mt-4 font-medium" data-testid={`text-screenshot-title-${index}`}>
                  {screenshot.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
