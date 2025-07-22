const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/logo.png"
                alt="TimeIs Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Especializamos em automação de processos empresariais. Não
              vendemos automações, vendemos tempo.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Automação de Processos</li>
              <li>Integração de Sistemas</li>
              <li>Automação de Marketing</li>
              <li>Desenvolvimento Customizado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=timeis.pt@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  timeis.pt@gmail.com
                </a>
              </li>
              <li>+351 933 766 354</li>
              <li>Porto, Portugal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 TimeIs. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
