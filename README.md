# Portfólio profissional — Rubens Lima (V4)

Portfólio profissional com três áreas de atuação: **Dados**, **Copywriting** e **Desenvolvimento Web**. O projeto reúne trabalhos e indicações em páginas independentes, com visual responsivo e identidade visual própria.

**Site oficial:** https://portfolio.rubensplima.com/

## Acesso às páginas do portfólio

- **[Dados — página inicial](https://portfolio.rubensplima.com/)** — análise de dados, ETL, BI e automação.
- **[Copywriting](https://portfolio.rubensplima.com/copywriting-projetos/)** — projetos de escrita persuasiva e conteúdo.
- **[Desenvolvimento Web](https://portfolio.rubensplima.com/web-projetos/)** — sites, landing pages e aplicações web.
- **[Todos os Projetos](https://portfolio.rubensplima.com/todos-projetos/)** — visão geral e filtros por área.
- **[Indicações](https://portfolio.rubensplima.com/indicacoes.html)** — página única de ferramentas e recomendações.

## Estrutura

- `index.html` — Dados (página inicial)
- `copywriting-projetos/index.html` — Copywriting
- `web-projetos/index.html` — Desenvolvimento Web
- `todos-projetos/index.html` — projetos das três áreas, com filtros
- `indicacoes.html` — página **única** de indicações, compartilhada pelas áreas
- `assets/portfolio-v4.css` — estilos compartilhados
- `assets/portfolio-v4.js` — integração de dados e renderização dos cartões
- `images/` — imagens, logotipo e foto de perfil
- `resourses/` — arquivos legados e documentos preservados

## Funcionalidades

- Navegação por seções nas páginas de especialidade.
- Link **Indicações** direcionando à mesma página independente em todas as áreas.
- Cartões de projetos carregados de uma planilha pública do Google Sheets (somente leitura).
- Exibição condicionada a registros publicados e ao campo `area` (`dados`, `copywriting`, `web`).
- Filtros na página Todos os Projetos.
- Cartões clicáveis, links externos e layout adaptável a dispositivos móveis.

## Tecnologias

HTML5, CSS3, JavaScript sem frameworks e Google Sheets (endpoint público de visualização).

## Fluxo de trabalho e publicação

- **Produção:** branch `main`, publicada pelo GitHub Pages no domínio personalizado `portfolio.rubensplima.com`.
- **Desenvolvimento:** branch `dev/portfolio-v4`, com os arquivos da versão de testes em `preview-v4/`.
- **Prévia independente:** repositório `rubensplima/portfolio-v4-preview`, utilizado para homologação.
- **Backup anterior à V4:** branch `backup/pre-v4-2026-10-23`.

As alterações de desenvolvimento devem ser testadas antes de serem promovidas à `main`. O repositório de prévia não sincroniza automaticamente com a branch de desenvolvimento.

## Google Sheets

As abas `Projetos` e `Indicações` alimentam os cartões. A visibilidade dos registros depende do campo `publicado`. Os projetos são separados pelo campo `area` e podem ser ordenados pelo campo `ordem`. A planilha precisa permanecer acessível publicamente para o carregamento no site.

## Publicação da V4

A V4 foi aprovada em testes no computador e no celular e enviada à branch `main` em 23/10/2026. Os arquivos legados não substituídos foram mantidos no repositório.

---

© 2026 Rubens Lima.
