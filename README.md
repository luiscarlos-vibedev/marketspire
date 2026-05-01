# Marketspire - Landing Page

Bem-vindo ao repositório oficial da Landing Page corporativa da Marketspire.

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js versão superior a 18
- NPM ou Yarn

### Instalação
1. Clone este repositório
2. Crie uma cópia do arquivo `.env.example` renomeando para `.env.local`
3. Adicione a sua chave `RESEND_API_KEY` para testar os formulários
4. Instale as dependências executando:
```bash
npm install
```

### Rodando o Servidor de Desenvolvimento
```bash
npm run dev
```

Abra o site normalmente em [http://localhost:3000](http://localhost:3000).

## 🔒 Variáveis de Ambiente Necessárias
As seguintes chaves devem estar configuradas tanto no seu arquivo local quanto no painel da Vercel:
- `RESEND_API_KEY`: Necessária para disparo de e-mails transacionais.

*Projeto desenvolvido com Node 22, React 19, TypeScript e Tailwind v4.*