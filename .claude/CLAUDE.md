# JAVES Videomarketing — Regras do Projeto

## Stack

HTML + CSS + JS puro. Sem frameworks, sem build tools, sem dependências.

## Arquivos

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Estrutura e conteúdo |
| `css/style.css` | Todo o CSS — design via custom properties |
| `js/main.js` | Lógica de filtro do portfólio |
| `svg/` | Logos e símbolo da marca (não editar) |

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

Todas as decisões visuais estão nas custom properties em `css/style.css (:root)`.
Nunca use cores ou fontes fora do sistema sem alterar o `:root` primeiro.

Accent: `#C8973A` · Fundo: `#050505` · Display: Bebas Neue (H1/H2) · UI: Space Grotesk · Corpo: Inter
