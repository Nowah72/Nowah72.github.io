import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/attached_assets/Logo(blue+fed65e)_00000_1764086552151.png" 
              alt="Candlesticks101 Logo" 
              className="h-8 w-8 rounded-md"
            />
            <span className="text-xl font-bold">Candlesticks101</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("learn")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-learn"
            >
              Learn
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-support"
            >
              Support
            </button>
            <Button size="sm" data-testid="button-download-header">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features-mobile"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("learn")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-learn-mobile"
            >
              Learn
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-support-mobile"
            >
              Support
            </button>
            <Button size="sm" className="w-full" data-testid="button-download-mobile">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
