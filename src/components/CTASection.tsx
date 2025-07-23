import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-surface-elevated">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-primary to-tech-blue-light rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para ganhar tempo?
            </h2>

            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Descubra quanto tempo sua empresa pode economizar com automação.
              Agende uma consultoria gratuita e veja sua operação transformada.
            </p>

            <div className="flex justify-center mb-8">
              <a
                href="https://wa.me/351933766354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-white px-8 py-4 font-semibold"
                >
                  Agendar consultoria gratuita
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Consultoria de 30 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Proposta personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
