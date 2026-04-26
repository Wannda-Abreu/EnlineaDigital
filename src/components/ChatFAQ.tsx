import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

const WHATSAPP_URL = "https://wa.me/18090000000";
const AVATAR_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_160/v1777202769/ChatGPT_Image_26_abr_2026_12_59_28_carzsk.png";

const FAQS = [
  {
    question: "¿Cuánto cuesta una página web?",
    answer:
      "Tenemos planes desde RD$35,000 para presencia inicial, RD$55,000 + RD$8,000/mes para presencia digital, RD$75,000 + RD$15,000/mes para crecimiento digital y RD$110,000 + RD$25,000/mes para escala digital.",
  },
  {
    question: "¿En cuánto tiempo está lista?",
    answer:
      "Una web sencilla puede estar lista en menos tiempo, mientras que un proyecto mas completo toma mas etapas. Todo depende del alcance, contenido y revisiones.",
  },
  {
    question: "¿Incluye SEO?",
    answer:
      "Si, podemos incluir una base SEO para que tu web salga mejor preparada desde el inicio y tenga una estructura mas clara para buscadores.",
  },
] as const;

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    sender: "bot",
    text: "Hola 👋 ¿Quieres saber precios o cómo empezar?",
  },
];

export default function ChatFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const endRef = useRef<HTMLDivElement | null>(null);
  const nextIdRef = useRef(INITIAL_MESSAGES.length + 1);

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
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] max-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <img
              src={AVATAR_URL}
              alt="Equipo enlínea"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="40px"
            />
            <div>
              <p className="text-sm font-semibold text-white">Equipo enlínea</p>
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
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="border-t border-white/10 px-4 py-4">
            <div className="flex flex-col gap-2">
              {FAQS.map((faq) => (
                <button
                  key={faq.question}
                  type="button"
                  onClick={() => handleFaqClick(faq.question, faq.answer)}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-left text-sm text-slate-200 transition duration-300 hover:border-sky-200/35 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                >
                  {faq.question}
                </button>
              ))}
            </div>

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
