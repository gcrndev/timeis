import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/teste1.jpg";

const HeroSection = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 5000); // 5 segundos de animação
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-surface-elevated overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Automation background"
          className={`w-full h-full object-cover${
            animate ? " animate-kenburns" : ""
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
            Não vendemos <span className="text-primary">automações</span>.
            <br />
            Vendemos <span className="text-primary">tempo</span>.
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme processos manuais em fluxos automáticos inteligentes.
            Libere sua equipe para focar no que realmente importa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/351933766354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="px-8 py-4">
                Quero ganhar tempo
              </Button>
            </a>
            <Button variant="outline" size="lg" className="px-8 py-4">
              Ver como funciona
            </Button>
          </div>

          <div className="mt-12 text-text-muted">
            <p className="text-sm">
              Confiado por mais de 50 empresas em crescimento
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-tech-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
