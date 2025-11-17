Este projeto foi criado com o objetivo de desenvolver uma aplicação front-end moderna, leve e de alta performance usando React + TypeScript + Vite.
O objetivo era desenvolver uma interface capaz de:


listar produtos,


permitir que o usuário adicione itens ao carrinho,


atualizar totais em tempo real,


simular um fluxo de pagamento,


gerar um pedido final.


Além disso, o projeto precisava ser rápido, escalável, organizado e utilizando ferramentas modernas como React + TypeScript + Vite.

⚙️ Ação
Para atingir esse objetivo, foi criada uma aplicação front-end com:
🧩 1. Interface inspirada no iFood


Listagem de produtos com foto, nome e preço.


Responsividade para celular e desktop.


Layout simples e intuitivo.


🛒 2. Carrinho de compras funcional


Adicionar e remover itens.


Alterar quantidades individualmente.


Calcular subtotal, taxa, entrega e total automaticamente.


💳 3. Simulação de pagamento


Etapa para seleção de método (Pix, cartão, dinheiro).


Validação simples antes de finalizar.


Possibilidade de adicionar observações do pedido.


📦 4. Geração do pedido


Após o pagamento, o sistema gera um número de pedido.


Exibe um resumo completo:


itens comprados


endereço


forma de pagamento


valor total




🛠️ 5. Tecnologia e boas práticas
O projeto utiliza:


React 18


TypeScript


Vite (rápido, leve e com HMR)


ESLint configurado com regras recomendadas, incluindo:


análise por TypeScript


eslint-plugin-react


padrão de código consistente




🌐 6. Deploy em produção
Aplicação publicada na Vercel, garantindo acesso rápido e estabilidade.
🔗 Acesso online:
https://projeto-md35.vercel.app

🟢 Resultado
O resultado final é uma aplicação estilo iFood com:


⚡ Carregamento extremamente rápido


🛒 Carrinho totalmente funcional


💰 Fluxo de pagamento simulado


📦 Geração de pedido estruturada


📱 Design responsivo


🧼 Código limpo, padronizado e fácil de manter


Essa estrutura demonstra domínio de:


manipulação de estado


trabalho com componentes


boas práticas com TypeScript


lógica de negócio front-end


deploy profissional


Ideal para apresentação em entrevistas e portfólio profissional.

📁 Estrutura do Projeto
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── context/
 ├── App.tsx
 ├── main.tsx
assets/
index.html
tsconfig.json
vite.config.ts
eslint.config.js


▶️ Como rodar o projeto
npm install
npm run dev

Acesse em:
http://localhost:5173/


📐 Configuração do ESLint (Resumo)
Parser options:
parserOptions: {
  project: ['./tsconfig.node.json', './tsconfig.app.json'],
  tsconfigRootDir: import.meta.dirname,
}

Regras recomendadas com tipagem:
tseslint.configs.recommendedTypeChecked

Plugin React:
import react from 'eslint-plugin-react'

plugins: { react },
rules: {
  ...react.configs.recommended.rules,
  ...react.configs['jsx-runtime'].rules,
}


⭐ Conclusão
Este projeto demonstra a criação de uma mini aplicação de delivery completa, com:
✔ UX inspirada em apps reais
✔ Carrinho totalmente funcional
✔ Pagamento simulado
✔ Pedido gerado com sucesso
✔ Código limpo e escalável
✔ Deploy online

