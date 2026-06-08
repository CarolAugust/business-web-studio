import Link from "next/link";

const whatsappLink =
  "https://wa.me/5541988320056?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site.";

const services = [
  {
    title: "Página de apresentação",
    text: "Uma página única para mostrar quem você é, o que oferece e como seus clientes entram em contato.",
  },
  {
    title: "Site completo",
    text: "Um site com início, sobre, serviços e contato, ideal para apresentar melhor o negócio.",
  },
  {
    title: "Contato fácil",
    text: "Botão de WhatsApp, links para redes sociais e espaço para receber mensagens.",
  },
];

const examples = [
  {
    slug: "salao-de-beleza",
    category: "Beleza",
    title: "Salão de beleza",
    description:
      "Modelo com serviços, fotos de trabalhos, horários e agendamento pelo WhatsApp.",
    features: ["Serviços", "Galeria", "Agendamento"],
    accent: "rose",
    model: {
      brand: "Bella Studio",
      headline: "Cabelo, unhas e beleza em um espaço acolhedor",
      copy: "Cortes, coloração, manicure e tratamentos com atendimento marcado.",
      cta: "Agendar horário",
      sections: ["Serviços", "Resultados", "Endereço"],
      bullets: ["Escova e corte", "Manicure", "Coloração"],
    },
  },
  {
    slug: "clinica-de-estetica",
    category: "Estética",
    title: "Clínica de estética",
    description:
      "Modelo para tratamentos, diferenciais, fotos do espaço e avaliação inicial.",
    features: ["Tratamentos", "Antes e depois", "Avaliação"],
    accent: "cyan",
    model: {
      brand: "Derma Care",
      headline: "Tratamentos faciais e corporais com atendimento individual",
      copy: "Limpeza de pele, protocolos estéticos e avaliação personalizada.",
      cta: "Marcar avaliação",
      sections: ["Tratamentos", "Equipe", "Resultados"],
      bullets: ["Limpeza de pele", "Drenagem", "Protocolos faciais"],
    },
  },
  {
    slug: "nutricionista",
    category: "Saúde",
    title: "Nutricionista",
    description:
      "Modelo para explicar o atendimento, especialidades e facilitar consultas.",
    features: ["Especialidades", "Planos", "Consulta"],
    accent: "emerald",
    model: {
      brand: "Nutri Ana",
      headline: "Nutrição simples para uma rotina mais leve",
      copy: "Consultas presenciais e online com plano alimentar individual.",
      cta: "Agendar consulta",
      sections: ["Atendimento", "Planos", "Depoimentos"],
      bullets: ["Emagrecimento", "Reeducação", "Saúde intestinal"],
    },
  },
  {
    slug: "personal-trainer",
    category: "Fitness",
    title: "Personal trainer",
    description:
      "Modelo com planos de treino, resultados de alunos e avaliação inicial.",
    features: ["Planos", "Resultados", "Avaliação"],
    accent: "orange",
    model: {
      brand: "Move Fit",
      headline: "Treinos personalizados para ganhar constância",
      copy: "Acompanhamento presencial, online e planos para diferentes níveis.",
      cta: "Começar avaliação",
      sections: ["Planos", "Alunos", "Contato"],
      bullets: ["Treino online", "Hipertrofia", "Condicionamento"],
    },
  },
  {
    slug: "restaurante-cafe",
    category: "Alimentação",
    title: "Restaurante ou café",
    description:
      "Modelo com cardápio, fotos dos produtos, localização, pedidos e reservas.",
    features: ["Cardápio", "Fotos", "Pedidos"],
    accent: "amber",
    model: {
      brand: "Casa do Café",
      headline: "Cafés, doces e almoços rápidos no centro da cidade",
      copy: "Cardápio atualizado, fotos dos pratos e botão para pedidos.",
      cta: "Ver cardápio",
      sections: ["Cardápio", "Fotos", "Localização"],
      bullets: ["Cafés especiais", "Doces", "Pratos do dia"],
    },
  },
  {
    slug: "consultoria",
    category: "Serviços",
    title: "Consultoria",
    description:
      "Modelo para apresentar experiência, explicar serviços e receber orçamentos.",
    features: ["Sobre", "Serviços", "Contato"],
    accent: "violet",
    model: {
      brand: "Clara Consultoria",
      headline: "Organização e estratégia para pequenos negócios",
      copy: "Consultoria para melhorar processos, vendas e presença digital.",
      cta: "Pedir proposta",
      sections: ["Sobre", "Serviços", "Clientes"],
      bullets: ["Diagnóstico", "Plano de ação", "Acompanhamento"],
    },
  },
];

const packages = [
  {
    title: "Básico",
    text: "Para quem quer começar com uma página simples e profissional.",
    items: [
      "Uma página de apresentação",
      "Funciona bem no celular",
      "Botão de WhatsApp",
      "Links para redes sociais",
    ],
  },
  {
    title: "Profissional",
    text: "Para quem quer apresentar melhor os serviços e receber mais contatos.",
    items: [
      "Página mais completa",
      "Funciona bem no celular",
      "Botão de WhatsApp",
      "Espaço para mensagem de contato",
      "Ajuda para colocar o site no ar",
    ],
    featured: true,
  },
  {
    title: "Completo",
    text: "Para negócios que precisam de um site com mais informações e páginas.",
    items: [
      "Página inicial",
      "Página sobre o negócio",
      "Página de serviços",
      "Página de contato",
      "Ajuda para colocar o site no ar",
    ],
  },
];

const steps = [
  [
    "1",
    "Conversamos",
    "Você me conta sobre seu negócio, seus serviços e o que deseja mostrar.",
  ],
  [
    "2",
    "Organizamos",
    "Definimos quais informações precisam aparecer de forma clara.",
  ],
  [
    "3",
    "Eu crio",
    "Crio a página com visual profissional para celular, tablet e computador.",
  ],
  [
    "4",
    "Você revisa",
    "Você olha a página pronta e fazemos os ajustes combinados.",
  ],
  [
    "5",
    "Colocamos no ar",
    "A página fica online para seus clientes acessarem pelo celular.",
  ],
];

const accentStyles = {
  rose: {
    label: "text-rose-300",
    bg: "bg-rose-400",
    soft: "bg-rose-400/15",
    border: "border-rose-300/25",
  },
  cyan: {
    label: "text-cyan-300",
    bg: "bg-cyan-400",
    soft: "bg-cyan-400/15",
    border: "border-cyan-300/25",
  },
  emerald: {
    label: "text-emerald-300",
    bg: "bg-emerald-400",
    soft: "bg-emerald-400/15",
    border: "border-emerald-300/25",
  },
  orange: {
    label: "text-orange-300",
    bg: "bg-orange-400",
    soft: "bg-orange-400/15",
    border: "border-orange-300/25",
  },
  amber: {
    label: "text-amber-300",
    bg: "bg-amber-400",
    soft: "bg-amber-400/15",
    border: "border-amber-300/25",
  },
  violet: {
    label: "text-violet-300",
    bg: "bg-violet-400",
    soft: "bg-violet-400/15",
    border: "border-violet-300/25",
  },
};

type Accent = keyof typeof accentStyles;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
      {children}
    </p>
  );
}

function ModelMockup({
  example,
}: {
  example: (typeof examples)[number];
}) {
  const accent = accentStyles[example.accent as Accent];

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-zinc-950 text-white">
      <div className="flex items-center gap-1 border-b border-white/10 bg-white/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-yellow-300" />
        <span className="h-2 w-2 rounded-full bg-green-300" />
        <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
          Pré-modelo
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-black">{example.model.brand}</p>
          <div className="flex gap-2 text-[10px] font-bold text-zinc-400">
            {example.model.sections.slice(0, 2).map((section) => (
              <span key={section}>{section}</span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_0.8fr]">
          <div>
            <h4 className="text-2xl font-black leading-tight">
              {example.model.headline}
            </h4>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              {example.model.copy}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span
                className={`rounded-md px-4 py-3 text-xs font-black uppercase text-zinc-950 ${accent.bg}`}
              >
                {example.model.cta}
              </span>
              <span className="rounded-md border border-white/10 px-4 py-3 text-xs font-black uppercase text-white">
                Ver serviços
              </span>
            </div>
          </div>

          <div className={`rounded-lg border ${accent.border} ${accent.soft} p-3`}>
            <div className={`h-28 rounded-lg ${accent.bg}`} />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-md bg-white/15" />
              <div className="h-12 rounded-md bg-white/15" />
              <div className="h-12 rounded-md bg-white/15" />
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {example.model.bullets.map((item) => (
            <div
              key={item}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-zinc-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniPreview({ accentName }: { accentName: Accent }) {
  const accent = accentStyles[accentName];

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-sm">
      <div className="flex items-center gap-1 border-b border-white/10 bg-white/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-yellow-300" />
        <span className="h-2 w-2 rounded-full bg-green-300" />
      </div>

      <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 p-3">
        <div>
          <div className={`h-5 w-20 rounded ${accent.bg}`} />
          <div className="mt-3 h-3 w-28 rounded bg-white/15" />
          <div className="mt-2 h-3 w-20 rounded bg-white/15" />
          <div className={`mt-4 h-8 w-24 rounded ${accent.soft}`} />
        </div>

        <div className={`min-h-28 rounded ${accent.soft}`}>
          <div className="flex h-full items-end p-2">
            <div className={`h-12 w-full rounded ${accent.bg}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-lg font-black text-zinc-950">
              C
            </div>

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-black uppercase text-white">
                Carol
              </p>
              <p className="truncate text-[11px] font-black uppercase tracking-[0.16em] text-emerald-300">
                Web Studio
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-black uppercase text-zinc-300 md:flex">
            <a href="#inicio" className="transition hover:text-emerald-300">
              Início
            </a>
            <a href="#servicos" className="transition hover:text-emerald-300">
              Serviços
            </a>
            <a href="#exemplos" className="transition hover:text-emerald-300">
              Exemplos
            </a>
            <a href="#pacotes" className="transition hover:text-emerald-300">
              Pacotes
            </a>
            <a href="#processo" className="transition hover:text-emerald-300">
              Como funciona
            </a>
            <a href="#contato" className="transition hover:text-emerald-300">
              Contato
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-emerald-400 px-4 py-3 text-xs font-black uppercase text-zinc-950 transition hover:bg-emerald-300"
          >
            Orçamento
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-[1fr_0.9fr]"
      >
        <div>
          <SectionLabel>Carol Web Studio</SectionLabel>

          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl">
            Sites simples e profissionais para pequenos negócios
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Crio páginas bonitas, rápidas e fáceis de acessar pelo celular, para
            ajudar seu negócio a aparecer melhor na internet e receber contatos
            pelo WhatsApp.
          </p>

          <div className="mt-7 grid gap-3 sm:flex">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-400 px-6 py-4 text-center text-sm font-black uppercase text-zinc-950 transition hover:bg-emerald-300"
            >
              Pedir orçamento
            </a>

            <a
              href="#exemplos"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-black uppercase text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              Ver modelos
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30">
          <div className="rounded-lg bg-black p-4 text-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Preview mobile
                </p>
                <p className="mt-2 text-2xl font-black">Seu negócio no celular</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-emerald-400" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="h-3 w-full rounded bg-white/20" />
              <div className="h-3 w-4/5 rounded bg-white/20" />
              <div className="h-10 w-full rounded bg-emerald-400" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="h-20 rounded-lg bg-rose-400/20" />
            <div className="h-20 rounded-lg bg-cyan-400/20" />
            <div className="h-20 rounded-lg bg-amber-400/20" />
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="border-t border-white/10 bg-black/20 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Serviços</SectionLabel>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            O que posso criar para o seu negócio
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            A ideia é simples: criar uma presença online clara, bonita e fácil
            de entender, para que seus clientes encontrem você com mais
            facilidade.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="exemplos"
        className="border-t border-white/10 bg-zinc-900 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Ideias de sites</SectionLabel>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Clique em um modelo para abrir um pré-site pronto
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            Cada opção abaixo abre uma prévia de como o site poderia ficar, com
            capa, botão principal, áreas de conteúdo e chamadas para contato.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {examples.map((example) => {
              const accent = accentStyles[example.accent as Accent];

              return (
                <article
                  key={example.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <MiniPreview accentName={example.accent as Accent} />

                  <p
                    className={`mt-5 text-xs font-black uppercase tracking-[0.16em] ${accent.label}`}
                  >
                    {example.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black">{example.title}</h3>

                  <p className="mt-3 leading-7 text-zinc-300">
                    {example.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {example.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-xs font-bold text-zinc-200"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/modelos/${example.slug}`}
                    className="mt-4 flex items-center justify-between gap-4 rounded-lg bg-emerald-400 px-4 py-3 text-sm font-black uppercase text-zinc-950 transition hover:bg-emerald-300"
                  >
                    Abrir modelo completo
                    <span aria-hidden="true">→</span>
                  </Link>

                  <details className="group mt-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm font-black uppercase text-white transition hover:border-emerald-300">
                      Visualizar pré-modelo
                      <span className="text-lg leading-none text-emerald-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <ModelMockup example={example} />
                  </details>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="pacotes"
        className="border-t border-white/10 bg-black/20 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Pacotes</SectionLabel>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Escolha o melhor formato para o seu momento
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            Você pode começar com uma página simples e evoluir depois. O
            importante é ter um lugar profissional para apresentar seu negócio na
            internet.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.title}
                className={`rounded-lg border p-5 ${
                  item.featured
                    ? "border-emerald-300 bg-emerald-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {item.featured ? (
                  <p className="mb-3 inline-block rounded-md bg-emerald-400 px-3 py-1 text-xs font-black uppercase text-zinc-950">
                    Mais indicado
                  </p>
                ) : null}

                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>

                <ul className="mt-5 space-y-3 text-sm font-semibold text-zinc-200">
                  {item.items.map((listItem) => (
                    <li key={listItem} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="processo"
        className="border-t border-white/10 bg-zinc-950 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Como funciona</SectionLabel>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Um processo simples do começo ao fim
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            Você não precisa entender de tecnologia. Eu te ajudo a organizar as
            informações e transformar sua ideia em uma página pronta para
            divulgar.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {steps.map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-lg border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400 text-base font-black text-zinc-950">
                  {number}
                </span>

                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="border-t border-white/10 bg-black/20 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-4xl rounded-lg border border-emerald-300/25 bg-emerald-400/10 p-6 text-center sm:p-8">
          <SectionLabel>Contato</SectionLabel>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
            Quer uma página para divulgar seu negócio?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-300">
            Me chame no WhatsApp e me conte o que você precisa. Eu te ajudo a
            escolher o melhor formato para começar sem complicação.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-lg bg-emerald-400 px-6 py-4 text-sm font-black uppercase text-zinc-950 transition hover:bg-emerald-300"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center text-sm text-zinc-400 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© 2026 Carol Web Studio. Todos os direitos reservados.</p>
          <p>Você cuida do seu negócio. Eu cuido da sua página na internet.</p>
        </div>
      </footer>
    </main>
  );
}
