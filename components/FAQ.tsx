import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Qual a importância de um site para minha empresa?",
    answer:
      "O objetivo principal de um website é tornar-se uma filial de sua empresa, com capacidade de conseguir clientes e realizar serviços mesmo enquanto você está dormindo e sua empresa física está fechada. Além de você divulgar seus produtos e serviços, poderá trabalhar o marketing da empresa com um melhor custo-benefício.",
  },
  {
    question: "Quais os gastos eu tenho para manter um site?",
    answer:
      "Dentro os gastos que envolve a manutenção de um site podemos citar: O valor pago anualmente referente ao domínio do site + O valor mensal correspondente a hospedagem do site.",
  },
  {
    question: "Meu site irá aparecer no sistema de busca do Google?",
    answer:
      'Sim, com o tempo o Google vai indexar o seu site nos mecanismos de buscas. Uma forma de acelerar esse tempo, é utilizando um "Plugin/aplicativo" próprio para o SEO e também cadastrar o site na ferramenta Google Search Console. Além disso, ter páginas e posts de Blog com conteúdos sobre os interesses dos clientes é importantíssimo.',
  },
  {
    question:
      "Qual a diferença entre site: Institucional, Loja Virtual e Portal?",
    answer:
      "Site Institucional: É um site que descreve os produtos e tem como finalidade conduzir os consumidores para a compra tradicional. E-commerce: Além dos benefícios oferecidos por um site, o e-commerce se difere por possuir um módulo de comércio eletrônico com categorias, descrição de produtos, entre outras funções. Portal: São as páginas na internet que servem como ponto de acesso direto a um conjunto de serviços e informações.",
  },
  {
    question: "Quanto custa para desenvolver um site?",
    answer:
      "O valor cobrado para o desenvolvimento do site pode variar dependendo dos recursos e funcionalidade que este possuir. Uma ferramenta que utilizada de forma inteligente, corresponde positivamente ao tempo e dinheiro investidos.",
  },
  {
    question: "O que é hospedagem de site?",
    answer:
      "Hospedagem de site é o serviço de armazenamento de um site e disponibilização constante do mesmo na internet, ou seja, o serviço de hospedagem possibilitará que seu site seja visualizado 24h por dia em todo o mundo.",
  },
  {
    question: "O que é E-mail Profissional?",
    answer:
      "E-mail profissional é aquele usado pelas empresas com endereço próprio ex: contato@suaempresa.com.br diferentes dos e-mails gratuitos que são disponibilizados por provedores ou empresas.",
  },
  {
    question: "O que é o Domínio de um site?",
    answer:
      "O domínio de um site é como se fosse um endereço de uma casa. O Domínio é o endereço único do site e normalmente usa-se o nome da empresa no nome do domínio.",
  },
  {
    question: "Qual domínio eu devo escolher?",
    answer:
      "É muito importante a escolha de um domínio. Porém, este deve ser único, você poderá escolhe-lo, desde que não exista outro com nome igual. Este nome deve ser ligado a sua marca ou seu produto.",
  },
  {
    question: "O que é SEO?",
    answer:
      "Search Engine Optimization (SEO) é um conjunto de técnicas, métodos e/ou estudos que visam melhorar o posicionamento de suas páginas no mecanismo de busca.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white text-[#050029]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-montserrat"
          >
            FAQ - Perguntas Frequentes
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-primary flex-shrink-0" />
                ) : (
                  <Plus className="text-primary flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
