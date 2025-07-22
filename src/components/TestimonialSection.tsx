import { Star, Quote } from "lucide-react";
const TestimonialSection = () => {
  return <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="bg-surface-elevated p-8 md:p-12 rounded-2xl shadow-lg relative">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-primary/20">
            <Quote className="w-16 h-16" />
          </div>
          
          <div className="relative z-10">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-text-primary font-medium mb-8 text-center leading-relaxed">"A TimeIs automatizou todo nosso processo de vendas. O que antes levava 3 horas por dia agora acontece automaticamente. Nossa equipe pode focar em fechar negócios em vez de tarefas administrativas. ROI de 400% em apenas 2 meses."</blockquote>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">MC</span>
              </div>
              <cite className="not-italic">
                <div className="font-semibold text-text-primary text-lg">Marina Costa</div>
                <div className="text-text-secondary">CEO, TechSolutions</div>
                <div className="text-text-muted text-sm mt-1">Empresa de software • 45 funcionários</div>
              </cite>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-tech-blue/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;