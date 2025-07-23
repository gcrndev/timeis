import { Phone, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/uploads/logo.png"
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
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                  strokeWidth="2"
                  className="inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=timeis.pt@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  timeis.pt@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" color="#fff" />
                <a
                  href="tel:+351933766354"
                  className="hover:text-primary transition-colors"
                >
                  +351 933 766 354
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* WhatsApp SVG */}
                <a
                  href="https://wa.me/351933766354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    className="inline-block"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.107h-.001a9.87 9.87 0 01-4.988-1.357l-.357-.213-3.711.982.993-3.617-.232-.372a9.86 9.86 0 01-1.51-5.19c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.883 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.057 12.086c0 2.13.557 4.213 1.615 6.045L.057 24l6.063-1.594a11.93 11.93 0 005.929 1.515h.005c6.554 0 11.989-5.435 11.993-12.086a11.93 11.93 0 00-3.513-8.429z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5" color="#fff" />
                <a
                  href="https://www.instagram.com/timeis.pt?igsh=NjVkeDZoM3V0bHZu&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* TikTok SVG oficial */}
                <a
                  href="https://www.tiktok.com/@timeis.pt?_t=ZG-8yGYhzg4l7J&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <g>
                      <path
                        d="M184.5 32c2.2 27.2 19.2 44.2 46.5 46.5V96c-13.7 1.3-26.2-1.1-37.5-7.2v61.2c0 44.6-31.7 60.6-62.1 60.6-13.1 0-28.1-3.7-39.7-11.7-17.1-11.5-27.2-29.7-27.2-50.1 0-34.2 27.8-62 62-62 2.7 0 5.4 0.2 8 0.5v36.7c-2.6-0.4-5.3-0.7-8-0.7-14.1 0-25.6 11.5-25.6 25.6 0 8.7 4.4 16.5 11.1 21.1 5.1 3.5 11.2 5.5 17.7 5.5 17.2 0 26.6-10.3 26.6-29.7V32h28.2z"
                        fill="#fff"
                      />
                      <path
                        d="M231 78.5v17.5c-13.7 1.3-26.2-1.1-37.5-7.2v61.2c0 44.6-31.7 60.6-62.1 60.6-13.1 0-28.1-3.7-39.7-11.7-17.1-11.5-27.2-29.7-27.2-50.1 0-34.2 27.8-62 62-62 2.7 0 5.4 0.2 8 0.5v36.7c-2.6-0.4-5.3-0.7-8-0.7-14.1 0-25.6 11.5-25.6 25.6 0 8.7 4.4 16.5 11.1 21.1 5.1 3.5 11.2 5.5 17.7 5.5 17.2 0 26.6-10.3 26.6-29.7V32h28.2c2.2 27.2 19.2 44.2 46.5 46.5z"
                        fill="#fff"
                      />
                      <path
                        d="M193.5 88.8v61.2c0 44.6-31.7 60.6-62.1 60.6-13.1 0-28.1-3.7-39.7-11.7-17.1-11.5-27.2-29.7-27.2-50.1 0-34.2 27.8-62 62-62 2.7 0 5.4 0.2 8 0.5v36.7c-2.6-0.4-5.3-0.7-8-0.7-14.1 0-25.6 11.5-25.6 25.6 0 8.7 4.4 16.5 11.1 21.1 5.1 3.5 11.2 5.5 17.7 5.5 17.2 0 26.6-10.3 26.6-29.7V32h28.2c2.2 27.2 19.2 44.2 46.5 46.5v17.5c-13.7 1.3-26.2-1.1-37.5-7.2z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  TikTok
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" color="#fff" />
                Porto, Portugal
              </li>
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
