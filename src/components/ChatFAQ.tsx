import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

type ChatFaq = {
  question: string;
  answer: string;
  icon: string;
};

const WHATSAPP_URL = "https://wa.me/18090000000";
const AVATAR_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_160/v1777202769/ChatGPT_Image_26_abr_2026_12_59_28_carzsk.png";

const FAQS: readonly ChatFaq[] = [
  {
    icon: "💸",
    question: "Cuanto cuesta una pagina web?",
    answer:
      "🚀 Presencia Inicial\nDesde RD$35,000 (unico)\nIdeal para empezar.\nLanding + WhatsApp + redes.\n👉 Empieza a aparecer en internet.\n\n🌐 Presencia Digital\nDesde RD$55,000 + RD$8,000/mes\nWeb + SEO basico + WhatsApp.\n👉 Empieza a captar clientes.\n\n📈 Crecimiento Digital\nDesde RD$75,000 + RD$15,000/mes\nWeb + contenido + redes.\n👉 Mas visibilidad y clientes constantes.\n\n🔥 Escala Digital\nDesde RD$110,000 + RD$25,000/mes\nEstrategia completa + campanas.\n👉 Crecimiento real y ventas.",
  },
  {
    icon: "⏱️",
    question: "En cuanto tiempo esta lista?",
    answer:
      "⏱️ Depende del tipo de proyecto.\n\n👉 Una web sencilla puede estar lista en 5 a 10 dias.\n👉 Un proyecto mas completo puede tomar 2 a 4 semanas.\n\nEl tiempo varia segun el contenido, alcance y revisiones, pero siempre trabajamos para entregarte lo antes posible sin perder calidad.",
  },
  {
    icon: "🔎",
    question: "Incluye SEO?",
    answer:
      "🔎 Si.\n\nIncluimos una base de SEO desde el inicio para que tu web este bien estructurada y preparada para aparecer en Google.\n\n👉 Optimizamos estructura, textos y aspectos clave para buscadores.\n\nSi buscas resultados mas fuertes, tambien ofrecemos SEO mas avanzado.",
  },
  {
    icon: "📝",
    question: "Necesito tener todo el contenido listo?",
    answer:
      "📝 No necesariamente.\n\n👉 Podemos ayudarte a organizar textos e imagenes.",
  },
  {
    icon: "💳",
    question: "Puedo pagar en partes?",
    answer:
      "💳 Si.\n\n👉 Normalmente trabajamos con un pago inicial y el resto al finalizar.",
  },
  {
    icon: "🌍",
    question: "Incluye dominio y hosting?",
    answer:
      "🌍 Podemos gestionarlo por ti o trabajar con el que ya tengas.\n\n👉 Te asesoramos en todo el proceso.",
  },
  {
    icon: "📱",
    question: "La web se vera bien en moviles?",
    answer:
      "📱 Si.\n\n👉 Todas nuestras webs son responsive y adaptadas a cualquier dispositivo.",
  },
  {
    icon: "✏️",
    question: "Puedo editar la web despues?",
    answer:
      "✏️ Si.\n\n👉 Podemos dejarte todo listo para que hagas cambios basicos.",
  },
  {
    icon: "🇩🇴",
    question: "Trabajan solo en Republica Dominicana?",
    answer:
      "🇩🇴 No.\n\n👉 Trabajamos online, pero estamos enfocados en negocios en RD.",
  },
  {
    icon: "📦",
    question: "Que pasa despues de la entrega?",
    answer:
      "📦 Puedes contratar mantenimiento o gestionarla por tu cuenta.\n\n👉 Nos adaptamos a lo que necesites.",
  },
  {
    icon: "🎯",
    question: "Me ayudan a conseguir clientes?",
    answer:
      "🎯 Si.\n\n👉 Ofrecemos estrategias para atraer clientes desde internet.",
  },
  {
    icon: "🛟",
    question: "Ofrecen soporte?",
    answer:
      "🛟 Si.\n\n👉 Te acompanamos durante el proceso y despues si lo necesitas.",
  },
  {
    icon: "🚀",
    question: "Como empiezo?",
    answer:
      "🚀 Muy facil.\n\n👉 Escribenos y te orientamos segun tu negocio.",
  },
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    sender: "bot",
    text: "Hola. Quieres saber precios o como empezar?",
  },
];

const VISIBLE_FAQ_COUNT = 3;

export default function ChatFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [hasAnsweredFaq, setHasAnsweredFaq] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);
  const nextIdRef = useRef(INITIAL_MESSAGES.length + 1);
  const visibleFaqs = showAllFaqs ? FAQS : FAQS.slice(0, VISIBLE_FAQ_COUNT);
  const hasHiddenFaqs = FAQS.length > VISIBLE_FAQ_COUNT;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [isOpen, messages]);

  const handleFaqClick = (question: string, answer: string) => {
    const userMessage: ChatMessage = {
      id: nextIdRef.current++,
      sender: "user",
      text: question,
    };

    const botMessage: ChatMessage = {
      id: nextIdRef.current++,
      sender: "bot",
      text: answer,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage, botMessage]);
    setHasAnsweredFaq(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] max-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <img
              src={AVATAR_URL}
              alt="Equipo enlinea"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="40px"
            />
            <div>
              <p className="text-sm font-semibold text-white">Equipo enlinea</p>
              <p className="text-xs text-emerald-300">En linea</p>
            </div>
          </div>

          <div className="max-h-[22rem] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                    message.sender === "user"
                      ? "bg-slate-800 text-white"
                      : "bg-slate-200 text-slate-900"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="border-t border-white/10 px-4 py-4">
            {!hasAnsweredFaq ? (
              <>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200/72">
                  Preguntas frecuentes
                </p>
                <div className="flex flex-col gap-2">
                  {visibleFaqs.map((faq) => (
                    <button
                      key={faq.question}
                      type="button"
                      onClick={() => handleFaqClick(`${faq.icon} ${faq.question}`, faq.answer)}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-left text-sm text-slate-200 transition duration-300 hover:border-sky-200/35 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                    >
                      <span className="flex items-start gap-2">
                        <span aria-hidden="true" className="shrink-0">
                          {faq.icon}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                    </button>
                  ))}
                </div>

                {hasHiddenFaqs ? (
                  <button
                    type="button"
                    onClick={() => setShowAllFaqs((currentState) => !currentState)}
                    className="mt-3 inline-flex items-center justify-center rounded-xl border border-white/10 px-3 py-2 text-sm font-medium text-sky-100 transition duration-300 hover:border-sky-200/35 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                  >
                    {showAllFaqs ? "Ver menos preguntas" : "Ver mas preguntas"}
                  </button>
                ) : null}
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setHasAnsweredFaq(false);
                  setShowAllFaqs(false);
                }}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-3 py-2 text-sm font-medium text-sky-100 transition duration-300 hover:border-sky-200/35 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                Ver otras preguntas
              </button>
            )}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-sky-300/24 bg-sky-300/10 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:border-sky-200/45 hover:bg-sky-300/16 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((currentState) => !currentState)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        className="inline-flex items-center gap-3 rounded-full border border-sky-300/24 bg-slate-950/92 px-3 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition duration-300 hover:border-sky-200/45 hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
      >
        <img
          src={AVATAR_URL}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
          decoding="async"
          sizes="40px"
          aria-hidden="true"
        />
        <span>Chatea con nosotros</span>
      </button>
    </div>
  );
}
