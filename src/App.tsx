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
          <Link href="#">Serviços</Link>
          <Link href="#">Cases</Link>
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
        <main className="flex-1 sm:px-6 pt-12" style={{ height: 12200 }}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold sm:pb-12 drop-shadow-lg">
            <span className="bg-gradient-to-r from-red-700 via-gray-700 to-green-900 text-transparent bg-clip-text animate-gradient">
              Foco em criar experiências digitais incríveis e inovadoras.
            </span>
          </h2>

          <h3 className="border-t pt-1 font-serif text-2xl mb-8 pb-1 mt-8">
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
        </main>
      </div>
      <footer>rodapé</footer>
    </div>
  );
}

export default App;
