import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";

const screenshots = [
  { title: "Interactive Lessons", image: "/lesson_1764086592743.PNG" },
  { title: "Market Analysis", image: "/market_1764086592743.PNG" },
  { title: "Pattern Scanner", image: "/sacnner_1764086592744.PNG" },
  { title: "Trading Simulator", image: "/sim_1764086592744.PNG" },
  { title: "Drawing Tools", image: "/drawing_1764086858883.PNG" },
  { title: "Flashcards", image: "/flashcards_1764086858883.PNG" },
  { title: "Quiz Practice", image: "/quiz_1764086888488.PNG" },
];

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (itemsRef.current[currentIndex]) {
      itemsRef.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

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

        <div className="relative flex items-center justify-center gap-8 lg:gap-12">
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 z-10 group transition-all duration-300 hover:scale-110 active:scale-95"
            data-testid="button-prev-screenshot"
            aria-label="Previous screenshot"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all rounded-full" />
              <div className="relative flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full border-2 border-primary bg-background/80 backdrop-blur group-hover:bg-primary/10 transition-all">
                <svg className="h-8 w-8 lg:h-10 lg:w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
          </button>

          <div
            ref={containerRef}
            className="flex gap-8 pb-4 overflow-x-hidden scroll-smooth"
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className={`flex-shrink-0 transition-all duration-300 ${
                  index === currentIndex ? "scale-100 opacity-100" : "scale-90 opacity-60"
                }`}
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

          <button
            onClick={goToNext}
            className="flex-shrink-0 z-10 group transition-all duration-300 hover:scale-110 active:scale-95"
            data-testid="button-next-screenshot"
            aria-label="Next screenshot"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all rounded-full" />
              <div className="relative flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full border-2 border-primary bg-background/80 backdrop-blur group-hover:bg-primary/10 transition-all">
                <svg className="h-8 w-8 lg:h-10 lg:w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
              }`}
              data-testid={`dot-indicator-${index}`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
