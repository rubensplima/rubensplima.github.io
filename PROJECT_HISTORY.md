# Histórico de Desenvolvimento do Portfólio

**Data de Conclusão:** 14 de Janeiro de 2026
**URL Final:** [https://portfolio.rubensplima.com](https://portfolio.rubensplima.com)
**Repositório:** [rubensplima/rubensplima.github.io](https://github.com/rubensplima/rubensplima.github.io)

---

## 🎯 Objetivo do Projeto
Desenvolver e implantar um site de portfólio profissional (SPA - Single Page Application) para apresentar a trajetória de Rubens Lima como **Analista de Dados** e **Desenvolvedor Web**, enfatizando projetos técnicos, competências e links para contato/serviços.

## 🛠️ Stack Tecnológica
*   **Front-end:** HTML5 Semântico, CSS3 Moderno (Váriáveis, Flexbox, Grid), JavaScript (Vanilla).
*   **Deploy:** GitHub Pages.
*   **Domínio:** Personalizado via CNAME (portfolio.rubensplima.com).
*   **Design:** Mobile-First, com foco em usabilidade e performance.

## 📅 Log de Desenvolvimento

### Fase 1: Planejamento e Estrutura
*   Definição da paleta de cores e estilo visual (Moderno/Dark details).
*   Criação da estrutura de arquivos (`index.html`, `style.css`, `main.js`).
*   Implementação do Layout Responsivo (Menu Hambúrguer, Grid System).

### Fase 2: Conteúdo e Seções
*   **Hero Section:** Design minimalista com CTA duplo.
*   **Sobre Mim:** Layout assimétrico com foto e texto.
*   **Experiência (Timeline):** Linha do tempo profissional detalhada.
*   **Skills & Certificações:** Tags visuais para competências técnicas.
*   **Cases de Dados:** Seção preparada para receber Notebooks e PDFs.
*   **Web Projects:** Galeria de projetos web.
*   **Indicações:** Página dedicada (`indicacoes.html`) para ferramentas e links de afiliados.

### Fase 3: Deployment e Configuração
*   Configuração do repositório Git.
*   Criação do arquivo `README.md` com instruções de manutenção.
*   Configuração de domínio personalizado (`portfolio.rubensplima.com`) via arquivo `CNAME`.
*   Ajuste de redirecionamento DNS.

## 📂 Estrutura de Pastas Final
```
/
├── index.html        # Página Principal
├── indicacoes.html   # Página de Recomendações
├── style.css         # Estilos
├── main.js           # Scripts
├── CNAME             # Configuração de Domínio
├── README.md         # Documentação Técnica
├── PROJECT_HISTORY.md# Este arquivo (Histórico)
├── images/           # Assets gráficos
└── resourses/        # Documentos e Projetos
    ├── pdf/          # CV e documentos
    └── dsa/          # Projetos de Data Science (Notebooks/HTML)
```

## 📝 Notas para Manutenção Futura
1.  **Atualizar Projetos:** Adicionar novos arquivos em `resourses/dsa/` e criar novos cards na seção `#cases` do `index.html`.
2.  **Atualizar Blog/Artigos:** Pode ser expandido criando uma nova página `blog.html` seguindo o modelo de `indicacoes.html`.
3.  **Domínio:** O domínio é gerido externamente; o GitHub Pages apenas responde ao CNAME configurado.

---
*Gerado automaticamente via assistente de IA para preservação da memória do projeto.*


---

## Versão 4 — Reformulação e publicação (23 de outubro de 2026)

**Status:** publicada em produção e homologada pelo responsável no computador e no celular.

### Objetivos e decisões de arquitetura

A V4 ampliou o portfólio de duas frentes para **três áreas independentes**: Dados, Copywriting e Desenvolvimento Web. Foi criada uma página de **Todos os Projetos**, com filtros por área, e preservada uma **única página de Indicações**, compartilhada por todas as especialidades. A página inicial e o domínio oficial permanecem direcionados à área de Dados.

A navegação das páginas de especialidade usa links para as seções Projetos, Competências, Sobre e Contato; o item Indicações abre a página compartilhada. A página Todos os Projetos reúne a navegação entre áreas e o acesso às Indicações.

### Endereços publicados

- **Dados (início):** https://portfolio.rubensplima.com/
- **Copywriting:** https://portfolio.rubensplima.com/copywriting-projetos/
- **Desenvolvimento Web:** https://portfolio.rubensplima.com/web-projetos/
- **Todos os Projetos:** https://portfolio.rubensplima.com/todos-projetos/
- **Indicações:** https://portfolio.rubensplima.com/indicacoes.html

### Integração e conteúdo

Os cartões de projetos e indicações são renderizados em JavaScript a partir de abas de uma planilha pública do **Google Sheets**, em modo somente leitura. Os registros publicados são controlados pelo campo `publicado`; os projetos usam `area` (`dados`, `copywriting` ou `web`) e `ordem` para filtragem e ordenação. A página Todos os Projetos oferece filtros interativos. Os cartões permitem acesso aos links cadastrados.

### Navegação contextual de Indicações

Para preservar a continuidade entre áreas, os links para `indicacoes.html` incluem o parâmetro `origem` (`dados`, `copywriting`, `web` ou `todos`). A página única de Indicações lê esse parâmetro e configura o logotipo, os links de navegação e o botão de retorno para a página de origem. Na ausência de um parâmetro válido, o destino padrão é Dados. A solução dispensa cookies e armazenamento local.

### Estrutura principal da V4 em produção

```text
/
├── index.html
├── copywriting-projetos/index.html
├── web-projetos/index.html
├── todos-projetos/index.html
├── indicacoes.html
├── assets/
│   ├── portfolio-v4.css
│   └── portfolio-v4.js
├── images/
├── resourses/
├── CNAME
├── README.md
└── PROJECT_HISTORY.md
```

Os arquivos legados `style.css` e `main.js` foram preservados no repositório, mas a interface V4 utiliza os arquivos compartilhados de `assets/`.

### Desenvolvimento, homologação, publicação e recuperação

- **Repositório oficial:** `rubensplima/rubensplima.github.io`.
- **Produção:** branch `main`, publicada pelo GitHub Pages com domínio personalizado `portfolio.rubensplima.com`.
- **Desenvolvimento:** branch `dev/portfolio-v4`, com o protótipo em `preview-v4/`.
- **Prévia de homologação:** repositório separado `rubensplima/portfolio-v4-preview`, usado para validar a V4 sem substituir a produção.
- **Cópia de segurança anterior à publicação:** branch `backup/pre-v4-2026-10-23` no repositório oficial.

Após os testes de navegação, carregamento dos cartões, filtros e responsividade, a V4 foi enviada à `main`. O `README.md` foi atualizado com a arquitetura e os links de todas as páginas. Posteriormente, foi implementada e publicada a navegação contextual da página de Indicações.

**Nota de manutenção:** desenvolver e validar alterações antes de atualizar a branch `main`. A prévia independente não é sincronizada automaticamente com a branch de desenvolvimento. Para novos projetos e indicações, atualizar os registros da planilha pública conforme o esquema existente; alterações estruturais exigem revisão do JavaScript.

**Nota histórica:** as seções anteriores deste documento descrevem a versão inicial de janeiro de 2026. As instruções antigas sobre criação manual de cartões e a estrutura original não representam o fluxo de manutenção da V4.
