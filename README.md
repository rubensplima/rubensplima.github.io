# Portfólio profissional — Rubens Lima

Repositório do portfólio profissional publicado em [portfolio.rubensplima.com](https://portfolio.rubensplima.com/), com foco principal em **Data Analytics** e apresentação de projetos, competências, experiência e canais de contato.

> **Estado do projeto (23/10/2026):** o redesenho visual foi aprovado como protótipo. A implementação está em desenvolvimento na branch `dev/portfolio-redesign-2026`. **A branch `main` continua sendo a versão publicada.** A existência desta branch e deste documento não significa que as novas páginas ou a integração com planilhas já estejam implantadas.

## Diretrizes aprovadas para o redesenho

- Identidade visual existente preservada: ciano `#0BB2D9`, laranja `#FFA62B`, grafite `#272727`, branco e cinza claro.
- Logotipo original **maior**, à esquerda do cabeçalho, **sem repetir o nome** ao lado dele.
- Foto e apresentação pessoal na área inicial, com foco na proposta de valor profissional.
- Portfólio de dados como página principal, com projetos em cartões e histórico profissional preservado.
- Página **Indicações** independente da home, acessada pelo menu e destinada a recomendações de livros, hospedagem, ferramentas e serviços.
- Contato por `contato@rubensplima.com` e WhatsApp profissional indicado pelo proprietário; não usar botão flutuante.
- Layout responsivo, editorial e discreto; evitar animações excessivas.

## Arquitetura planejada

| Área | Caminho previsto | Situação |
| --- | --- | --- |
| Data Analytics | `/` | Protótipo aprovado; implementação pendente |
| Copywriting | `/copywriting/` | Planejada |
| Desenvolvimento Web e Soluções Digitais | `/web/` | Planejada |
| Indicações | `/indicacoes.html` | Página independente prevista |
| Dashboard de arquitetura | Repositório `architecture-investor-dashboard` | Projeto independente; preservar funcionamento |

Projetos devem ter documentação nos seus próprios repositórios; este portfólio funciona como vitrine com cartões e links externos.

## Conteúdo atualizado por planilha — planejado, não implantado

Uma planilha Google Sheets deverá funcionar como CMS leve, com abas **Projetos** e **Indicações**. Campos propostos: título, descrição, categoria, imagem, URL, publicado, destaque e ordem. Os cartões serão carregados de um feed público seguro, com validação de dados e compatibilidade CORS. **Não expor credenciais, chaves privadas nem informações não destinadas à publicação.**

As recomendações com links de afiliados devem ser identificadas de maneira transparente. Até a integração estar concluída, o conteúdo poderá ser mantido em arquivos estáticos de desenvolvimento.

## Estrutura atual da versão publicada

```text
/
├── index.html
├── indicacoes.html
├── style.css
├── main.js
├── images/
└── resourses/
```

Tecnologias atuais: HTML, CSS, JavaScript, Google Fonts e Font Awesome. Hospedagem via GitHub Pages.

## Fluxo seguro de trabalho

1. Desenvolver e revisar na branch `dev/portfolio-redesign-2026`, sem alterar a `main`.
2. Validar responsividade, acessibilidade, links, contato, imagens, SEO e carregamento dos cartões.
3. Confirmar que o dashboard de arquitetura e os projetos existentes continuam acessíveis.
4. Integrar o Google Sheets e testar publicação/ordenação e estados vazios.
5. Só então aprovar o merge e a publicação na `main`.

## Histórico

- **23/10/2026:** aprovada a primeira versão visual; definida separação da página Indicações, identidade do cabeçalho, contatos e estratégia de planilha; criada branch de desenvolvimento e atualizado este README.

© 2026 Rubens Lima.
