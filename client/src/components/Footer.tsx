import { Button } from "@/components/ui/button";
import { SiGoogleplay, SiApple, SiDiscord } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/attached_assets/Logo(blue+fed65e)_00000_1764086552151.png" 
                alt="Candlesticks101 Logo" 
                className="h-8 w-8 rounded-md"
              />
              <span className="text-xl font-bold">Candlesticks101</span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Master trading patterns and technical analysis. Learn to trade with confidence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("features")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-features"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("learn")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-learn"
              >
                What You'll Learn
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-support"
              >
                Support
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Download App</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start gap-2"
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.david.candlesticks101", "_blank")}
                data-testid="button-footer-google-play"
              >
                <SiGoogleplay className="h-4 w-4" />
                Google Play
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start gap-2 opacity-50 cursor-not-allowed"
                disabled
                data-testid="button-footer-app-store"
              >
                <SiApple className="h-5 w-5" />
                App Store (Coming Soon)
              </Button>
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                size="icon"
                variant="outline"
                onClick={() => window.open("https://discord.gg/hUNyhdXQhz", "_blank")}
                data-testid="button-footer-discord"
              >
                <SiDiscord className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => window.location.href = "mailto:david.alex.ilie@gmail.com"}
                data-testid="button-footer-email"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p data-testid="text-copyright">
              © {new Date().getFullYear()} Candlesticks101. All rights reserved.
            </p>
            <p className="text-center" data-testid="text-footer-disclaimer">
              Educational purposes only. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
