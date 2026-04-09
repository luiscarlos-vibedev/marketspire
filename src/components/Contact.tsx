import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import {
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  _honeypot?: string;
  privacyConsent: boolean;
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setFormStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar a mensagem.");
      }

      setFormStatus("success");
      reset();
    } catch (e: any) {
      setFormStatus("error");
      setErrorMessage(e.message);
    }
  };

  return (
    <section id="contato" className="py-16 bg-[#050029] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 font-montserrat text-gradient-cyan">
              Fale Conosco
            </h2>

            <div className="flex items-start gap-4 mb-10">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles size={20} className="text-primary" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Solicite um orçamento agora mesmo e descubra como podemos te
                ajudar a ter um{" "}
                <span className="text-primary font-bold">
                  site profissional
                </span>{" "}
                que converte!
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold font-montserrat">
                Nossos Contatos:
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:5543996550891"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors">
                    (43) 9 9655-0891
                  </span>
                </a>

                <a
                  href="https://wa.me/5543996550891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#25d366] transition-colors">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
                      alt="WhatsApp"
                      className="w-5 h-5 object-contain brightness-0 invert"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-lg group-hover:text-[#25d366] transition-colors">
                    (43) 9 9655-0891
                  </span>
                </a>

                <a
                  href="mailto:contato@marketspire.com.br"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors">
                    contato@marketspire.com.br
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/marketspireoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span className="text-lg group-hover:text-accent transition-colors">
                    @marketspireoficial
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                <CheckCircle2 size={64} className="text-green-500" />
                <h3 className="text-2xl font-bold font-montserrat">
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-300">
                  Recebemos seu contato com sucesso. Retornaremos o mais breve
                  possível.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-primary hover:underline font-semibold"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input
                  type="text"
                  {...register("_honeypot")}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="Digite Seu Nome"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1">
                      Campo obrigatório
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    id="phone"
                    {...register("phone", { required: true })}
                    placeholder="Digite Seu WhatsApp"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1">
                      Campo obrigatório
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder="Digite Seu E-mail"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      E-mail inválido
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Tipo de Serviço
                  </label>
                  <select
                    id="service"
                    {...register("service", { required: true })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-300"
                  >
                    <option value="" className="bg-[#1a1a2e]">
                      Escolha uma opção
                    </option>
                    <option value="Site Institucional" className="bg-[#1a1a2e]">
                      Site Institucional
                    </option>
                    <option value="Loja Virtual" className="bg-[#1a1a2e]">
                      Loja Virtual
                    </option>
                    <option value="Landing Page" className="bg-[#1a1a2e]">
                      Landing Page
                    </option>
                    <option value="Blog" className="bg-[#1a1a2e]">
                      Blog
                    </option>
                    <option
                      value="Site de Imobiliária"
                      className="bg-[#1a1a2e]"
                    >
                      Site de Imobiliária
                    </option>
                    <option value="Outros" className="bg-[#1a1a2e]">
                      Outros
                    </option>
                  </select>
                  {errors.service && (
                    <span className="text-red-500 text-xs mt-1">
                      Campo obrigatório
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    {...register("message", { required: true })}
                    rows={4}
                    placeholder="Como Podemos te Ajudar?"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      Campo obrigatório
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    {...register("privacyConsent", { required: true })}
                    className="mt-1"
                  />
                  <label
                    htmlFor="privacyConsent"
                    className="text-xs text-gray-400 leading-tight"
                  >
                    Li e aceito a{" "}
                    <button
                      type="button"
                      onClick={() => (window as any).openPrivacyPolicy()}
                      className="text-primary hover:underline"
                    >
                      Política de Privacidade
                    </button>{" "}
                    e concordo que meus dados sejam coletados para o contato.
                  </label>
                </div>
                {errors.privacyConsent && (
                  <span className="text-red-500 text-xs block -mt-4 mb-4">
                    Você deve aceitar a Política de Privacidade.
                  </span>
                )}

                {formStatus === "error" && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
