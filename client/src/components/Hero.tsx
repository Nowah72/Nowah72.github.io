import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiGoogleplay, SiApple } from "react-icons/si";
import { Lock } from "lucide-react";

export default function Hero() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleAppStoreClick = () => {
    setIsShaking(true);
    setShowWaitlist(true);
    setTimeout(() => setIsShaking(false), 500);
  };
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Free Trading Education App
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight" data-testid="text-hero-title">
                Master Candlestick Patterns & Technical Analysis
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground" data-testid="text-hero-subtitle">
                Learn trading patterns, chart reading, and market psychology. Whether you trade stocks, forex, or crypto, build confidence with structured lessons and real-world examples.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.david.candlesticks101", "_blank")}
                data-testid="button-google-play"
              >
                <SiGoogleplay className="h-5 w-5" />
                Download on Google Play
              </Button>
              <div className="relative">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className={`gap-2 ${isShaking ? 'animate-shake' : ''}`}
                  onClick={handleAppStoreClick}
                  data-testid="button-app-store"
                >
                  <Lock className="h-4 w-4" />
                  <SiApple className="h-6 w-6" />
                  Download on App Store
                </Button>
                {showWaitlist && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    Currently unavailable,{" "}
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfgtErCMCaRL5AZioayOEwlG872BF8HAnd6FDKc2j1yCRWZcw/viewform?usp=sharing&ouid=115128174965785846597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                      data-testid="link-waitlist"
                    >
                      join waitlist
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-lessons">50+</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-patterns">30+</div>
                <div className="text-sm text-muted-foreground">Patterns</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-rating">4.8</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl border-8 border-foreground/10 bg-card overflow-hidden shadow-2xl" style={{ width: "300px", height: "600px" }}>
                <img 
                  src="/attached_assets/Capture_1764086592743.PNG" 
                  alt="Candlesticks101 App Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
