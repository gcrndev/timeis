import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/timeis/">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }uploads/logoteste.png`}
                alt="TimeIs Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Menu Desktop */}
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

          {/* Botão Falar Conosco Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/351933766354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="sm">
                Falar Conosco
              </Button>
            </a>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center">
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button
                  aria-label="Abrir menu"
                  className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setOpen(true)}
                >
                  {/* Ícone hambúrguer */}
                  <svg
                    width="28"
                    height="28"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <nav className="flex flex-col gap-6 py-8 px-6">
                  <a
                    href="#services"
                    className="text-lg text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Serviços
                  </a>
                  <a
                    href="#about"
                    className="text-lg text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Sobre
                  </a>
                  <a
                    href="#examples"
                    className="text-lg text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Exemplos
                  </a>
                  <DrawerClose asChild>
                    <a
                      href="https://wa.me/351933766354"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full"
                    >
                      <Button variant="cta" size="sm" className="w-full">
                        Falar Conosco
                      </Button>
                    </a>
                  </DrawerClose>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
