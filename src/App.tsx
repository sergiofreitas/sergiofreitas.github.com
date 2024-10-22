import "@fontsource/dm-serif-display";
import "@fontsource-variable/dm-sans";
import { Link } from "./components/link";
import { Card } from "./components/card";
import { Laptop, ServerCog, TabletSmartphone, Users } from "lucide-react";

function App() {
  const startedYear = 2006;
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto antialiased">
      <header className="hidden py-6 md:flex justify-center items-center gap-8">
        <a href="/" className="font-serif text-2xl">
          Sérgio Freitas
        </a>
        <nav className="flex-1 flex gap-6 items-center text-sm mt-0">
          <Link href="#services">Serviços</Link>
          <Link href="#cases">Cases</Link>
          <Link href="#">Entre em contato</Link>
        </nav>
      </header>
      <div className="sm:flex items-start justify-between gap-4">
        <aside className="flex-1 sm:sticky top-0 pt-6 sm:pt-12 bg-background sm:px-6">
          <img
            src="/avatar.jpg"
            alt="sou eu, o Sérgio Freitas"
            className="w-40 h-40 aspect-square rounded-3xl"
          />
          <h1 className="font-serif text-2xl sm:text-4xl font-bold pt-4 sm:pt-8 sm:pb-4">
            Oi, eu sou o Sérgio Freitas
          </h1>
          <p className="text-sm sm:text-normal py-2">
            Fullcycle Developer, mobile engineer, SRE engineer & Tech lead com
            mais de <strong>{currentYear - startedYear} anos</strong> de
            expêriencia em startups, fintechs, agencias digitais e empresas de
            software.
          </p>
        </aside>
        <main className="flex-1 sm:px-6 pt-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold sm:pb-12 drop-shadow-lg">
            <span className="bg-gradient-to-r from-red-700 via-gray-700 to-green-900 text-transparent bg-clip-text animate-gradient">
              Foco em criar experiências digitais incríveis e inovadoras.
            </span>
          </h2>

          <h3
            className="border-t pt-1 font-serif text-2xl mb-8 pb-1 mt-8"
            id="services"
          >
            O que eu faço
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <Card>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="rounded-full bg-[#DDA15E] p-2">
                  <Laptop />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2">
                    FullStack development
                  </h4>
                  <p className="text-sm">
                    Planejamento, gestão, desenvolvimento e operação de webapps,
                    websites, e-commerces, SaaS, backends, frontends, landing
                    pages ou qualquer outro sistema web.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="rounded-full bg-[#DDA15E] p-2">
                  <TabletSmartphone />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2">
                    Mobile development
                  </h4>
                  <p className="text-sm">
                    Planejamento, gestão, desenvolvimento e operação de
                    aplicativos para Android, iOS, smartwatches e outros
                    dispositivos utilizando tecnologia de desenvolvimento
                    hibrida React Native.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="rounded-full bg-[#DDA15E] p-2">
                  <ServerCog />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2">
                    DevOps Engineering
                  </h4>
                  <p className="text-sm">
                    Construção e operação de infraestruturas on-premises e/ou
                    cloud utilizando boas práticas de DevOps, DevSecOps e
                    FinOps, com enfase na nuvem AWS e em ferramentas Infra as
                    Code, Kubernetes e Docker.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="rounded-full bg-[#DDA15E] p-2">
                  <Users />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2">
                    Engineering Management
                  </h4>
                  <p className="text-sm">
                    Liderança técnica e gestão de pessoas, focado em ajudar
                    equipes a atingir seu máximo potencial por meio de boas
                    práticas de DX, servant leadership, management 3.0, DORA
                    metrics e outras metodologias inovadoras.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <h3
            className="border-t pt-1 font-serif text-2xl mb-8 pb-1 mt-8"
            id="cases"
          >
            Alguns cases de sucesso
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <Card>
              <h4 className="text-xl font-bold font-serif">
                Marketplace de venda de ingressos integrados
              </h4>
              <span className="text-xs text-zinc-500">Confidencial (NDA)</span>
              <p className="text-sm pt-2 leading-tight">
                Desenvolvimento de um marketplace robusto e altamente integrado,
                projetado para conectar bancos a empresas de venda de ingressos,
                como ticketeiras, clubes, teatros e empresas de eventos. O
                grande diferencial era sua operação discreta e eficiente,
                atuando de forma invisível ao cliente final, garantindo uma
                experiência fluida sem a necessidade de sair do ambiente do
                canal de venda. Com uma integração perfeita e operação em
                segundo plano, o sistema oferecia alta performance e
                confiabilidade, maximizando a eficiência dos processos de venda.
              </p>
            </Card>

            <Card>
              <h4 className="text-xl font-bold font-serif">
                App whitelabel de clubes de futebol
              </h4>
              <span className="text-xs text-zinc-500">4all</span>
              <p className="text-sm pt-2 leading-tight"></p>
            </Card>

            <Card>
              <h4 className="text-xl font-bold font-serif">
                SaaS B2B de entrega de panfletos
              </h4>
              <span className="text-xs text-zinc-500">Oppizi</span>
              <p className="text-sm pt-2 leading-tight"></p>
            </Card>

            <Card>
              <h4 className="text-xl font-bold font-serif">
                App de apoio psicologico a estudantes americanos
              </h4>
              <span className="text-xs text-zinc-500">Closegap</span>
              <p className="text-sm pt-2 leading-tight"></p>
            </Card>

            <Card>
              <h4 className="text-xl font-bold font-serif">
                App de apoio e serviços aos clientes
              </h4>
              <span className="text-xs text-zinc-500">Cortel</span>
              <p className="text-sm pt-2 leading-tight"></p>
            </Card>
          </div>
        </main>
      </div>
      <footer className="w-full mt-20 mb-8 rounded-lg sm:rounded-full bg-zinc-900 py-6 px-4 sm:px-12 text-white flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1">
          <p className="text-xs">Tem alguma idéia ou projeto inovador?</p>
          <p className="font-serif text-4xl">Vamos conversar!</p>
        </div>

        <div className="text-sm flex-1 flex justify-center">
          <ul className="grid grid-cols-1 gap-6 sm:gap-2">
            <li>
              <Link href="mailto:sergio.sgfreitas@gmail.com">
                📬 sergio.sgfreitas@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://app.reclaim.ai/m/sergio-freitas/falar-sobre-alguma-ideia-inovadora"
                target="_blank"
                rel="noreferer"
              >
                📅 Vamos marcar uma call?
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/sergiosgfreitas/"
                target="_blank"
                rel="noreferer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 inline mr-2 fill-blue-500 -mt-[2px]"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Me chama no linkedin
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
