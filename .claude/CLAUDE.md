# JAVES Videomarketing — Regras do Projeto

## Stack

Next.js 16 · TypeScript · Tailwind CSS v4 · App Router

## Arquivos principais

| Arquivo/Pasta | Responsabilidade |
|---|---|
| `app/layout.tsx` | Root layout — carrega fontes via next/font |
| `app/page.tsx` | Página principal — monta todas as sections |
| `app/globals.css` | Design system — `@theme` Tailwind v4 + custom properties |
| `components/` | Header, Hero, Portfolio, Partners, TeamSection, Footer, JavesMark |
| `public/svg/` | Logos e símbolo da marca (não editar) |
| `public/png/` | Fotos e assets raster |

## Agentes disponíveis

| Agente | Modelo | Quando usar |
|---|---|---|
| `commander` | Haiku 5.5 | Ponto de entrada — roteia todas as tarefas |
| `coder` | Sonnet 5.5 | Implementação de código |
| `reviewer` | Haiku 5.5 | Primeira revisão — rápida e barata |
| `approver` | Sonnet 5.5 | Valida o review do Haiku e emite aprovação final |

Fluxo padrão: **usuário → commander → coder → reviewer → approver → (coder se reprovado) → usuário**

## Skills disponíveis

| Skill | Agente que usa | Para quê |
|---|---|---|
| `.claude/skills/frontend-design.md` | `coder` | Direção visual, tipografia, evitar defaults genéricos |
| `.claude/skills/ui-ux-pro-max/SKILL.md` | `coder` | 192 paletas, 74 pares de fontes, 80 estilos UI, geração de design system |
| `.claude/skills/web-design-guidelines.md` | `reviewer` `approver` | 100+ regras de UI/UX, acessibilidade, dark mode |
| `.claude/skills/webapp-testing.md` | `reviewer` | Testar comportamento no browser com Playwright |

## Design system

Tokens em `app/globals.css` — bloco `@theme` para Tailwind v4 + `:root` para CSS vars.
Nunca use cores ou fontes fora do sistema sem alterar esses tokens primeiro.

Paleta: B&W puro · Fundo: `#050505` · Texto: `#FFFFFF` · Gradiente metálico: `#707070 → #FFFFFF → #707070`
Fontes: Montserrat 900 (títulos display) · Space Grotesk (UI) · Inter (corpo)
