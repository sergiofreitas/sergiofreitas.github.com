import "@fontsource/dm-serif-display";
import "@fontsource-variable/dm-sans";
import { Link } from "./components/link";
import { Card } from "./components/card";
import { Laptop, ServerCog, TabletSmartphone, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Expandable } from "./components/expandable";
import { useState } from "react";

const works = [
  {
    title: "Marketplace de venda de ingressos integrados",
    category: "Confidencial (NDA)",
    src: "/work-tickets.jpg",
    children: (
      <p className="text-xs sm:text-sm pt-2 leading-relaxed">
        Desenvolvimento de um marketplace robusto e altamente integrado,
        projetado para conectar bancos a empresas de venda de ingressos, como
        ticketeiras, clubes, teatros e empresas de eventos. O grande diferencial
        era sua operação discreta e eficiente, atuando de forma invisível ao
        cliente final, garantindo uma experiência fluida sem a necessidade de
        sair do ambiente do canal de venda. Com uma integração perfeita e
        operação em segundo plano, o sistema oferecia alta performance e
        confiabilidade, maximizando a eficiência dos processos de venda.
      </p>
    ),
  },
  {
    title: "App whitelabel de clubes de futebol",
    category: "4all",
    src: "/work-ground.jpg",
    children: (
      <p className="text-xs sm:text-sm pt-2 leading-relaxed">
        Desenvolvimento de um aplicativo modular whitelabel de alto desempenho
        para clubes de futebol, concluído em apenas 2 meses. O projeto enfrentou
        o desafio de um prazo curto e o uso de uma tecnologia emergente (menos
        de 2 anos), destacando-se pela customização avançada e reutilização de
        código. Seu diferencial foi a ativação e desativação de módulos
        on-demand, adaptando-se rapidamente às necessidades dos clubes. Atendeu
        com sucesso 10 dos maiores clubes do Brasil, incluindo Grêmio,
        Internacional, Flamengo e Corinthians, e impulsionou a criação de uma
        startup focada em soluções para clubes esportivos.
      </p>
    ),
  },
  {
    title: "SaaS B2B2C de entrega de panfletos",
    category: "Oppizi",
    src: "/work-oppizi.jpg",
    children: (
      <p className="text-xs sm:text-sm pt-2 leading-relaxed">
        Desenvolvimento e operação de uma plataforma B2B2C (app e web) para
        entrega de panfletos por profissionais autônomos, com grande adesão no
        Reino Unido e Austrália. A solução oferece uma oportunidade de trabalho
        freelancer como entregadores, ao mesmo tempo em que reduz
        significativamente os custos de propaganda para empresas. O principal
        diferencial da plataforma é seu sistema avançado de geolocalização,
        projetado para garantir a veracidade das entregas, evitando fraudes e
        assegurando que os panfletos sejam distribuídos corretamente.
      </p>
    ),
  },
  {
    title: "App de apoio psicologico a estudantes americanos",
    category: "Closegap",
    src: "https://placehold.co/600x400/222/FFF",
    children: (
      <p className="text-xs sm:text-sm pt-2 leading-relaxed">
        Desenvolvimento de um webapp voltado para suporte em tempo real à saúde
        mental de estudantes, com foco nas séries iniciais. Com uma dinâmica de
        gamificação, o app utiliza técnicas avançadas para identificação precoce
        de problemas, intervenções e gestão de crises. O projeto foi concluído
        em um prazo agressivo de 30 dias para o MVP, atendendo ao desafio de
        criar uma plataforma simples e acessível para crianças a partir de 5
        anos, sem perder a profundidade e a base científica exigida.
      </p>
    ),
  },
  {
    title: "App de apoio e serviços aos clientes",
    category: "Grupo Cortel",
    src: "https://placehold.co/600x400/222/FFF",
    children: (
      <p className="text-xs sm:text-sm pt-2 leading-relaxed">
        Desenvolvimento de um aplicativo para o Grupo Cortel, o maior
        conglomerado de funerárias da América Latina, oferecendo suporte
        completo aos clientes. O app permite localizar jazigos pelo nome do
        falecido, transmitir velórios em vídeo e inclui um e-commerce para a
        compra de flores e acessórios de homenagens. O principal desafio foi
        equilibrar inovação e dinamismo com a sensibilidade exigida pelo setor,
        entregando uma solução funcional e empática que atendesse às
        necessidades dos usuários em momentos delicados.
      </p>
    ),
  },
  {
    title:
      "Planejamento e execução de migração de software e infraestrutura legada",
    category: "Confidencial (NDA)",
    src: "/work-devops.jpg",
    children: (
      <p className="text-xs sm:text-sm pt-2 leading-relaxed">
        Planejamento, execução e gestão da migração de um software legado para
        uma arquitetura de microsserviços, além da transição de servidores
        on-premises para a AWS. O grande desafio desse projeto foi a ausência de
        uma equipe especializada em cloud e migração, o que exigiu não apenas a
        implementação técnica, mas também o treinamento da equipe interna. O
        resultado foi uma transformação digital bem-sucedida, com a criação de
        um fluxo contínuo de desenvolvimento e a capacitação da equipe,
        posicionando a empresa para uma operação mais eficiente e escalável no
        ambiente de nuvem.
      </p>
    ),
  },
];

function App() {
  const startedYear = 2006;
  const currentYear = new Date().getFullYear();
  const [contentId, setContentId] = useState<number | undefined>(undefined);

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

          <AnimatePresence>
            <div className="grid grid-cols-1 gap-4">
              {works.map((work, idx) => (
                <motion.div
                  className="relative overflow-hidden rounded-xl border cursor-pointer"
                  layoutId={`card-container-${idx}`}
                  onClick={() => setContentId(idx)}
                >
                  <motion.div
                    className="card-image-container relative"
                    layoutId={`card-image-container-${idx}`}
                  >
                    <img
                      className="aspect-video object-cover transition-all duration-500 hover:scale-125 hover:rotate-6"
                      src={work.src}
                      alt={work.title}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 left-4 pr-2"
                    layoutId={`title-container-${idx}`}
                  >
                    <span className="text-white text-xs">{work.category}</span>
                    <h2
                      className="text-xl md:text-2xl font-serif font-bold text-white drop-shadow"
                      style={{ textShadow: "0 0 4px #000" }}
                    >
                      {work.title}
                    </h2>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {typeof contentId !== "undefined" && (
              <Expandable
                id={contentId.toString()}
                src={works[contentId].src}
                title={works[contentId].title}
                category={works[contentId].category}
                onClose={() => setContentId(undefined)}
              >
                {works[contentId].children}
              </Expandable>
            )}
          </AnimatePresence>
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
