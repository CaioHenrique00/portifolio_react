// Em breve será descontinuado (pretendo colocar via SUPABASE para facilitar manutenção e atualização)

import { ExperienceProps } from "@/components/experience-card";

export const experiencesData: ExperienceProps[] = [
  {
    title: "Desenvolvedor Front-End Freelancer",
    company: "Remoto",
    period: "Dez/2024 — Ago/2025",
    description: [
      "Desenvolvimento do Front-End com Vue 3, Nuxt 3, TypeScript e TailwindCSS.",
      "Integração com APIs REST e testes de endpoints via Postman.",
      "Implementação de autenticação e controle de acesso.",
      "Criação de componentes reutilizáveis e organização da estrutura do projeto.",
    ],
  },
  {
    title: "Estagiário de Suporte Técnico",
    company: "Casa Civil",
    period: "Fev/2023 — Dez/2023",
    description: [
      "Suporte técnico presencial e remoto via Anydesk.",
      "Formatação e configuração de equipamentos corporativos.",
      "Controle de inventário e gestão de chamados via GLPI.",
    ],
  },
  {
    title: "Desenvolvedor Front-End (PJ)",
    company: "N2B Consultoria",
    period: "Out/2022 — Fev/2023",
    description: [
      "Manutenção e evolução de sistema legado em Angular, TypeScript e Bootstrap.",
      "Refatoração de componentes e desenvolvimento de novas funcionalidades em ambiente SCRUM.",
    ],
  },
];
