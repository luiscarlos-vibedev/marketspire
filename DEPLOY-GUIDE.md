# Deploy Marketspire - Passo a Passo

## 1. CRIAR REPOSITÓRIO NO GITHUB

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"**
3. Nome: `marketspire` (ou outro nome)
4. Visibility: **Public**
5. Marque **"Add a README file"**
6. Clique **"Create repository"**

## 2. ENVIAR CÓDIGO PARA O GITHUB

No seu terminal, na pasta do projeto:

```bash
# Inicializar git (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Criar commit
git commit -m "Primeiro deploy"

# Adicionar remoto (substitua pelo seu usuário)
git remote add origin https://github.com/SEU-USUARIO/marketspire.git

# Enviar para GitHub
git push -u origin main
```

## 3. DEPLOY NO VERCEL

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique **"Add New..."** → **"Project"**
3. Selecione seu repositório `marketspire`
4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique **"Deploy"**

## 4. CONFIGURAR RESEND (API de Email)

1. Acesse [resend.com](https://resend.com) e crie conta
2. Vá em **"API Keys"** e crie uma nova chave
3. Copie a chave (formato: `re_123...`)

## 5. ADICIONAR VARIÁVEIS NO VERCEL

1. No seu projeto na Vercel, vá em **"Settings"** → **"Environment Variables"**
2. Adicione:
   - Key: `RESEND_API_KEY`
   - Value: `re_123...` (sua chave da API)
3. Clique **"Save"**
4. Vá em **"Deployments"** e faça um novo deploy para aplicar as variáveis

## 6. DOMÍNIO PERSONALIZADO (Opcional)

1. Compre um domínio (Namecheap, Google Domains, etc)
2. No Vercel: **"Settings"** → **"Domains"**
3. Adicione seu domínio
4. Configure o DNS do seu registrador conforme instruções da Vercel

---

## Dicas Importantes

- Sempre faça push para o GitHub e a Vercel atualiza automaticamente
- Para mudar algo no site: edite no código → git add . → git commit -m "fix" → git push
- O Resend precisa de domínio verificado para enviar emails de verdade ( teste@suaempresa.com )
