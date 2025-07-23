import {
  FileText,
  Mail,
  Users,
  BarChart3,
  ShoppingCart,
  Calendar,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AutomationExamplesSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const examples = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Gestão de Documentos",
      description:
        "Processamento automático de contratos, propostas e documentos",
      tools: ["n8n", "Google Drive", "DocuSign"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing",
      description:
        "Campanhas personalizadas baseadas no comportamento do cliente",
      tools: ["Make", "Mailchimp", "HubSpot"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestão de Leads",
      description: "Captura, qualificação e distribuição automática de leads",
      tools: ["Zapier", "Pipedrive", "WhatsApp API"],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Relatórios Financeiros",
      description: "Consolidação automática de dados de vendas e performance",
      tools: ["Python", "Excel", "Power BI"],
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce",
      description: "Gestão de estoque, pedidos e comunicação com clientes",
      tools: ["API Rest", "Shopify", "Mercado Livre"],
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Agendamentos",
      description: "Sincronização de calendários e confirmação automática",
      tools: ["Calendly", "Google Calendar", "SMS"],
    },
  ];

  // Ativa animação apenas na primeira vez que a seção entra na tela
  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // só anima uma vez
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="examples"
      className="py-20 bg-surface-elevated scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Exemplos de automações
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Veja como transformamos processos manuais em fluxos automáticos que
            economizam horas de trabalho todos os dias.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700
            ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {example.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {example.title}
                </h3>
              </div>

              <p className="text-text-secondary mb-4 leading-relaxed">
                {example.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {example.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationExamplesSection;
