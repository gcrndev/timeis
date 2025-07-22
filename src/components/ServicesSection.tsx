import { Bot, Database, Mail, FileSpreadsheet } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Automação de Processos",
      description: "Eliminamos tarefas repetitivas e conectamos seus sistemas para trabalhar em harmonia."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integração de Sistemas",
      description: "Conectamos suas ferramentas favoritas e fazemos dados fluírem automaticamente."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Marketing Automation",
      description: "Campanhas inteligentes que se ajustam ao comportamento dos seus clientes."
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8" />,
      title: "Relatórios Automáticos",
      description: "Dashboards e relatórios que se atualizam sozinhos, sempre com dados frescos."
    }
  ];

  return (
    <section className="py-20 bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            O que fazemos
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Especializamos em transformar trabalho manual em processos automáticos que rodam 24/7, 
            sem erros e sem supervisão.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;