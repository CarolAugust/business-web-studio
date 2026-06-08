import Link from "next/link";
import { notFound } from "next/navigation";

const whatsappLink =
  "https://wa.me/5541988320056?text=Ol%C3%A1,%20gostaria%20de%20um%20site%20parecido%20com%20um%20dos%20modelos.";

const siteModels = [
  {
    slug: "salao-de-beleza",
    accent: "rose",
    eyebrow: "Modelo para beleza",
    brand: "Bella Studio",
    title: "Cabelo, unhas e beleza em um espaço acolhedor",
    description:
      "Um site para salão que mostra serviços, trabalhos realizados, horários e facilita o agendamento pelo WhatsApp.",
    cta: "Agendar horário",
    secondaryCta: "Ver serviços",
    services: ["Corte e escova", "Coloração", "Manicure", "Tratamentos"],
    highlights: ["Atendimento com hora marcada", "Galeria de resultados", "Endereço e mapa"],
    testimonial:
      "A página deixa claro o que o salão oferece e ajuda a cliente a chamar no WhatsApp sem procurar informação.",
    contactTitle: "Quer um modelo parecido para o seu salão?",
  },
  {
    slug: "clinica-de-estetica",
    accent: "cyan",
    eyebrow: "Modelo para estética",
    brand: "Derma Care",
    title: "Tratamentos faciais e corporais com atendimento individual",
    description:
      "Um modelo para clínicas apresentarem tratamentos, diferenciais, fotos do espaço e uma chamada clara para avaliação.",
    cta: "Marcar avaliação",
    secondaryCta: "Conhecer tratamentos",
    services: ["Limpeza de pele", "Drenagem", "Protocolos faciais", "Massagem modeladora"],
    highlights: ["Antes e depois", "Equipe profissional", "Avaliação inicial"],
    testimonial:
      "O modelo passa confiança e organiza os tratamentos para o cliente entender antes de entrar em contato.",
    contactTitle: "Quer um modelo parecido para sua clínica?",
  },
  {
    slug: "nutricionista",
    accent: "emerald",
    eyebrow: "Modelo para saúde",
    brand: "Nutri Ana",
    title: "Nutrição simples para uma rotina mais leve",
    description:
      "Um site para explicar o atendimento, apresentar especialidades e facilitar o agendamento de consultas.",
    cta: "Agendar consulta",
    secondaryCta: "Ver especialidades",
    services: ["Emagrecimento", "Reeducação alimentar", "Saúde intestinal", "Consulta online"],
    highlights: ["Plano individual", "Atendimento online", "Depoimentos"],
    testimonial:
      "O cliente entende como funciona a consulta e encontra rapidamente o botão para agendar.",
    contactTitle: "Quer um modelo parecido para seu atendimento?",
  },
  {
    slug: "personal-trainer",
    accent: "orange",
    eyebrow: "Modelo para fitness",
    brand: "Move Fit",
    title: "Treinos personalizados para ganhar constância",
    description:
      "Um site para mostrar planos, resultados de alunos, acompanhamento e contato para avaliação inicial.",
    cta: "Começar avaliação",
    secondaryCta: "Ver planos",
    services: ["Treino online", "Hipertrofia", "Condicionamento", "Plano iniciante"],
    highlights: ["Resultados de alunos", "Planos por objetivo", "Contato rápido"],
    testimonial:
      "O modelo mostra energia, clareza e ajuda o aluno a escolher o melhor tipo de acompanhamento.",
    contactTitle: "Quer um modelo parecido para seus treinos?",
  },
  {
    slug: "restaurante-cafe",
    accent: "amber",
    eyebrow: "Modelo para alimentação",
    brand: "Casa do Café",
    title: "Cafés, doces e almoços rápidos no centro da cidade",
    description:
      "Um site para apresentar cardápio, fotos dos produtos, localização, horários e pedidos pelo WhatsApp.",
    cta: "Ver cardápio",
    secondaryCta: "Fazer pedido",
    services: ["Cafés especiais", "Doces", "Pratos do dia", "Reservas"],
    highlights: ["Cardápio em destaque", "Fotos dos produtos", "Localização fácil"],
    testimonial:
      "O cliente vê o cardápio, entende onde fica e consegue pedir sem precisar mandar várias perguntas.",
    contactTitle: "Quer um modelo parecido para seu restaurante?",
  },
  {
    slug: "consultoria",
    accent: "violet",
    eyebrow: "Modelo para serviços",
    brand: "Clara Consultoria",
    title: "Organização e estratégia para pequenos negócios",
    description:
      "Um site para apresentar experiência, explicar serviços, mostrar autoridade e receber pedidos de proposta.",
    cta: "Pedir proposta",
    secondaryCta: "Ver serviços",
    services: ["Diagnóstico", "Plano de ação", "Processos", "Acompanhamento"],
    highlights: ["Apresentação profissional", "Serviços claros", "Contato para orçamento"],
    testimonial:
      "O modelo ajuda o cliente a entender valor, método e próximos passos antes de pedir uma proposta.",
    contactTitle: "Quer um modelo parecido para sua consultoria?",
  },
] as const;

const modelStyles = {
  rose: {
    body: "bg-rose-950 text-white",
    surface: "bg-rose-900/45",
    border: "border-rose-200/20",
    accent: "bg-rose-300 text-rose-950",
    text: "text-rose-200",
    muted: "text-rose-100/75",
    block: "bg-rose-300/20",
  },
  cyan: {
    body: "bg-slate-950 text-white",
    surface: "bg-cyan-950/55",
    border: "border-cyan-200/20",
    accent: "bg-cyan-300 text-cyan-950",
    text: "text-cyan-200",
    muted: "text-cyan-100/75",
    block: "bg-cyan-300/20",
  },
  emerald: {
    body: "bg-emerald-950 text-white",
    surface: "bg-emerald-900/45",
    border: "border-emerald-200/20",
    accent: "bg-emerald-300 text-emerald-950",
    text: "text-emerald-200",
    muted: "text-emerald-100/75",
    block: "bg-emerald-300/20",
  },
  orange: {
    body: "bg-zinc-950 text-white",
    surface: "bg-orange-950/55",
    border: "border-orange-200/20",
    accent: "bg-orange-300 text-orange-950",
    text: "text-orange-200",
    muted: "text-orange-100/75",
    block: "bg-orange-300/20",
  },
  amber: {
    body: "bg-stone-950 text-white",
    surface: "bg-amber-950/55",
    border: "border-amber-200/20",
    accent: "bg-amber-300 text-amber-950",
    text: "text-amber-200",
    muted: "text-amber-100/75",
    block: "bg-amber-300/20",
  },
  violet: {
    body: "bg-violet-950 text-white",
    surface: "bg-violet-900/45",
    border: "border-violet-200/20",
    accent: "bg-violet-300 text-violet-950",
    text: "text-violet-200",
    muted: "text-violet-100/75",
    block: "bg-violet-300/20",
  },
} as const;

export function generateStaticParams() {
  return siteModels.map((model) => ({ slug: model.slug }));
}

export default async function ModeloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = siteModels.find((item) => item.slug === slug);

  if (!model) {
    notFound();
  }

  const style = modelStyles[model.accent];

  return (
    <main className={`min-h-screen ${style.body}`}>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="text-sm font-black uppercase tracking-[0.14em] text-white">
            ← Voltar
          </Link>

          <nav className="hidden items-center gap-6 text-xs font-black uppercase text-white/70 md:flex">
            <a href="#servicos" className="hover:text-white">
              Serviços
            </a>
            <a href="#resultado" className="hover:text-white">
              Resultado
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg px-4 py-3 text-xs font-black uppercase ${style.accent}`}
          >
            Quero parecido
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className={`text-xs font-black uppercase tracking-[0.18em] ${style.text}`}>
            {model.eyebrow}
          </p>

          <p className="mt-5 text-xl font-black uppercase tracking-[0.08em]">
            {model.brand}
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl">
            {model.title}
          </h1>

          <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${style.muted}`}>
            {model.description}
          </p>

          <div className="mt-7 grid gap-3 sm:flex">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg px-6 py-4 text-center text-sm font-black uppercase ${style.accent}`}
            >
              {model.cta}
            </a>

            <a
              href="#servicos"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-black uppercase text-white"
            >
              {model.secondaryCta}
            </a>
          </div>
        </div>

        <div className={`rounded-lg border ${style.border} ${style.surface} p-4`}>
          <div className={`h-72 rounded-lg ${style.block}`}>
            <div className="flex h-full items-end p-4">
              <div className="w-full rounded-lg bg-black/35 p-4">
                <p className="text-sm font-black">{model.brand}</p>
                <div className="mt-3 h-3 w-4/5 rounded bg-white/30" />
                <div className="mt-2 h-3 w-2/3 rounded bg-white/20" />
                <div className={`mt-5 h-10 w-32 rounded-lg ${style.accent}`} />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-24 rounded-lg bg-white/10" />
            <div className="h-24 rounded-lg bg-white/15" />
            <div className="h-24 rounded-lg bg-white/10" />
          </div>
        </div>
      </section>

      <section id="servicos" className="border-t border-white/10 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className={`text-xs font-black uppercase tracking-[0.18em] ${style.text}`}>
            Serviços em destaque
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Uma seção pronta para mostrar o que o negócio oferece
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {model.services.map((service) => (
              <article
                key={service}
                className={`rounded-lg border ${style.border} bg-white/5 p-5`}
              >
                <div className={`h-10 w-10 rounded-lg ${style.block}`} />
                <h3 className="mt-5 text-lg font-black">{service}</h3>
                <p className={`mt-3 text-sm leading-6 ${style.muted}`}>
                  Texto curto explicando o serviço, benefício e como o cliente pode solicitar.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resultado" className={`border-t border-white/10 px-4 py-16 sm:px-6 ${style.surface}`}>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className={`text-xs font-black uppercase tracking-[0.18em] ${style.text}`}>
              Estrutura do modelo
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Áreas que ajudam o cliente a decidir mais rápido
            </h2>

            <p className={`mt-4 leading-7 ${style.muted}`}>{model.testimonial}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {model.highlights.map((highlight) => (
              <div
                key={highlight}
                className={`rounded-lg border ${style.border} bg-black/20 p-5`}
              >
                <div className={`h-24 rounded-lg ${style.block}`} />
                <h3 className="mt-5 text-lg font-black">{highlight}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 px-4 py-16 sm:px-6">
        <div className={`mx-auto max-w-4xl rounded-lg border ${style.border} ${style.surface} p-6 text-center sm:p-8`}>
          <p className={`text-xs font-black uppercase tracking-[0.18em] ${style.text}`}>
            Contato
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
            {model.contactTitle}
          </h2>

          <p className={`mx-auto mt-4 max-w-2xl leading-7 ${style.muted}`}>
            Este é um exemplo navegável. As cores, textos, fotos e seções podem
            ser ajustados para combinar com o negócio real do cliente.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-7 inline-flex rounded-lg px-6 py-4 text-sm font-black uppercase ${style.accent}`}
          >
            Quero um site assim
          </a>
        </div>
      </section>
    </main>
  );
}
