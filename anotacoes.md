Estudando pelo meu portifólio:

Providers o que é?
 - Um componente de contexto (Client Component) que envolve a aplicação inteira.
 - O HeroUI e o Next-Themes precisam de provedores de contexto para gerenciar estados globais (como o tema dark/light e estilos dos componentes)

Layout.tsx o que é?
- O arquivo raiz que define a estrutura HTML da sua página


instalação da biblioteca Lenis:
- npm install @studio-freight/react-lenis
Por que?
 - Para suavizar o efeito do scroll


 instalação do supabase:
 npm install @supabase/supabase-js
O que é?
É meu banco de dados pessoal, coloquei a URL e a APIKEY em .env.local, para ter acesso as imagens dos certificados
Por que utilizei ele?
Para implementar uma feature em education-card, no qual ao clicar, o modal com a imagem do certificado apareça.

--- sobre o Utils client.ts

Por que o arquivo em utils/supabase/client.ts?
O que é: 
- Um Singleton de Cliente. É um arquivo que centraliza a criação da conexão entre o seu front-end (navegador do usuário) e o banco de dados do Supabase.

Porque utilizar?

- Padronização: Em vez de configurar a URL e a Key do banco em todos os componentes, ele centraliza essa lógica. Se precisar mudar algo na conexão, muda em um só lugar.

- Segurança no Next.js: O Next.js separa o que roda no servidor do que roda no cliente. Esse arquivo usa o createBrowserClient, que é a forma correta e segura de permitir que o navegador do visitante peça dados ao banco sem expor chaves administrativas.

- Gestão de Memória: Ele garante que o seu site não abra uma nova conexão toda vez que um componente for renderizado, o que poderia deixar o site lento ou estourar o limite de conexões do banco de dados.