import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/">
              <img
                src="/lovable-uploads/logo.png"
                alt="TimeIs Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#about"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#examples"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Exemplos
            </a>
          </nav>

          <Button variant="cta" size="sm">
            Falar Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
