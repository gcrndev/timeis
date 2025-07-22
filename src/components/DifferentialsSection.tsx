import { CheckCircle, Clock, Shield, Zap } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Implementação Rápida",
      description: "Automações funcionando em dias, não meses. Resultados imediatos para sua operação."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Soluções Sob Medida",
      description: "Não vendemos templates. Cada automação é desenvolvida especificamente para seu negócio."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ROI Comprovado",
      description: "Clientes recuperam o investimento em menos de 3 meses com economia de tempo e recursos."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Suporte Contínuo",
      description: "Monitorizamos e otimizamos suas automações para garantir performance máxima."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Por que escolher a TimeIs?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Enquanto outros vendem ferramentas, nós vendemos resultados. 
            Nossa expertise técnica garante automações que realmente funcionam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 rounded-lg hover:bg-surface-elevated transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;