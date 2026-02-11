🚀 Portfolio
Este é um portfólio de alta performance desenvolvido com Next.js 15, focado em entregar uma experiência de usuário fluida através de animações modernas e uma arquitetura baseada em dados dinâmicos com Supabase.

🛠️ Tecnologias e Arquitetura
Front-end: Next.js 15 (App Router) e TypeScript.

Backend as a Service (BaaS): Supabase (PostgreSQL para dados e Buckets para arquivos).

UI/UX: HeroUI (NextUI) + Tailwind CSS para uma interface consistente e responsiva.

Motion Design: GSAP para controle de scroll e Framer Motion para micro-interações de componentes.

🎨 Processo Criativo & UX
A estratégia de design deste projeto foi pautada em três pilares:

Retenção de Usuário: Uso de Modais dinâmicos para visualização de certificados, evitando que o visitante saia da aplicação.

Escalabilidade Dinâmica: O sistema consome dados de um banco relacional, permitindo que novas conquistas sejam adicionadas via dashboard, sem alterações no código.

Refinamento Visual: Animações do tipo Stagger (atraso escalonado) garantem que os elementos entrem em cena de forma orgânica e profissional.

📖 Tutoriais de Configuração

1. Configuração do Banco de Dados (Supabase)
   Para que a seção de educação funcione, siga estes passos no seu painel do Supabase:

Crie a Tabela: Vá em Table Editor > New Table. Nome: education.

Estrutura de Colunas:

id: int8 (Primary Key)

institution: text

degree: text

period: text

type: text (Valor: curso)

certificate_path: text (Apenas o nome do arquivo, ex: formacao_ads.png)

Segurança (RLS): Clique em Authentication > Policies. Adicione uma política de SELECT para usuários public/anon.

2. Configuração do Storage (Certificados)
   Vá em Storage > New Bucket. Nome: Certificates.

Tornar Público: Clique nos três pontos do bucket e selecione "make public".

Policy de Leitura: Em Policies, crie uma nova regra de acesso público que permita a operação de SELECT (Read).

3. Variáveis de Ambiente
   Crie um arquivo .env.local na raiz do seu projeto Next.js:

Snippet de código
NEXT_PUBLIC_SUPABASE_URL=seu_link_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima

💻 Instalação Local
Clone o repositório:

CMD
git clone https://github.com/CaioHenrique00/portifolio_react.git
Instale as dependências:

CMD
npm install

Inicie o servidor de desenvolvimento:
npm run dev

📈 Registro de Atualizações Técnicas
V1.0.0: Lançamento inicial com estrutura Next.js.

V1.1.0: Integração completa com Supabase Database e Storage.

