# Projeto - Página de "Link na Bio"

Página de links no estilo Linktree que funciona como cartão de visitas digital e portfólio inicial de **Patrick Gonçalves Pinheiro**, desenvolvedor Front-End.

Projeto desenvolvido para consolidar os fundamentos de **HTML5 semântico**, **CSS3 moderno**, **JavaScript puro**, **acessibilidade** e **performance web**, sem uso de frameworks ou bibliotecas externas.

## Objetivo

Reunir em um único endereço quem eu sou, as tecnologias que aprendi e os principais canais profissionais (portfólio, LinkedIn, GitHub, currículo e contato), com carregamento rápido em qualquer dispositivo e navegação acessível.

## Páginas

| Arquivo                | Função                                                            |
| ---------------------- | ----------------------------------------------------------------- |
| `index.html`           | Página principal com o perfil e os links                          |
| `sobre.html`           | Apresentação pessoal e trajetória das tecnologias aprendidas      |
| `contato.html`         | Formulário de contato com validação                               |
| `style.css`            | Folha de estilos única, compartilhada pelas páginas               |
| `script.js`            | Tema claro/escuro e validação/envio do formulário                 |
| `img/eu.jpg`           | Foto de perfil                                                    |
| `curriculo-patrick.pdf`| Currículo para download (adicionar o arquivo na raiz do projeto)  |

## Tecnologias

- **HTML5 semântico:** `main`, `header`, `nav`, `section`, `footer`, com hierarquia de títulos correta.
- **CSS3:** Flexbox, Custom Properties (variáveis CSS), `clamp()` para tipografia e espaçamento fluidos, unidade `dvh` para telas móveis.
- **JavaScript puro (Vanilla JS), sem bibliotecas:** um único arquivo pequeno, carregado com `defer`.

## Recursos com JavaScript

- **Tema claro/escuro:** respeita a preferência do sistema na primeira visita e salva a escolha no `localStorage`. Um pequeno script no `<head>` aplica o tema antes da pintura da tela, evitando o "piscar" de cor.
- **Validação do formulário:** mensagens de erro em português, associadas aos campos com `aria-describedby` e `aria-invalid`, e o foco vai para o primeiro campo com erro.
- **Envio sem recarregar a página:** `fetch` com `FormData` para o serviço Formspree, com estados de "Enviando...", sucesso e erro anunciados por `role="status"`.
- **Funciona sem JavaScript:** os links e a leitura do conteúdo não dependem do script.

## Trajetória de aprendizado

Figma, HTML, CSS, JavaScript, Node.js, React, Bootstrap e Java, apresentados em ordem na página `sobre.html`, além das ferramentas e conceitos **Git**, **GitHub** e **API**.

## Principais projetos

Seção da página `sobre.html` com os projetos publicados online:

| Projeto | Descrição | Link |
| ------- | --------- | ---- |
| TaskFlow | Landing page de um aplicativo fictício de tarefas (Bootstrap 5) | [Abrir](https://patrickgp11.github.io/Projeto-01-Revisao-de-Bootstrap/) |
| TechStore: Checkout | Tela de checkout de e-commerce com validação e cupom (Bootstrap 5) | [Abrir](https://patrickgp11.github.io/Projeto-05-Revisao-de-Bootstrap/) |
| Word Termo Master | Jogo de palavras com modos Solo, Dueto e Quarteto e opções de acessibilidade | [Abrir](https://word-termo-master.vercel.app/) |

## Decisões de performance

- **Zero requisições externas no carregamento:** fontes do sistema (`system-ui`), favicon embutido e nenhuma biblioteca de terceiros.
- **Um único arquivo CSS**, pequeno, sem regras duplicadas.
- **Imagem com `width` e `height` definidos:** o navegador reserva o espaço antes de baixar a foto, evitando deslocamento de layout (CLS).
- **`fetchpriority="high"` na foto de perfil**, que é o maior elemento visível (LCP).
- **Animações apenas com `transform` e `background-color`**, propriedades baratas para o navegador.
- **Script com `defer`**, que não bloqueia a renderização da página.
- **Meta tags de SEO e Open Graph** para indexação e pré-visualização ao compartilhar o link.

## Decisões de acessibilidade

- `lang="pt-BR"` correto, para que leitores de tela usem a pronúncia certa.
- Link **"Pular para o conteúdo"** para quem navega com teclado.
- **Foco visível** (`:focus-visible`) em links, botões e campos.
- **Contraste de cores** adequado (WCAG AA), inclusive nos links do rodapé.
- Formulário com `label` associado a cada campo e atributos `autocomplete`.
- Links externos com `rel="noopener noreferrer"` (segurança).
- Respeita `prefers-reduced-motion` (desativa animações para quem prefere).
- Mensagens de erro e de envio do formulário anunciadas por leitores de tela.
- Tema claro e escuro, ambos com contraste adequado.
- Design responsivo, testado de telas pequenas a desktop.

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/PatrickGP11/NOME-DO-REPOSITORIO.git
   ```
2. Adicione seu currículo como `curriculo-patrick.pdf` na raiz do projeto.
3. Em `contato.html`, troque `SEU_ID_AQUI` pelo ID do seu formulário no [Formspree](https://formspree.io).
4. Abra o `index.html` no navegador (ou use a extensão Live Server do VS Code).

## Como publicar (GitHub Pages)

1. No repositório, abra **Settings > Pages**.
2. Em **Source**, escolha a branch `main` e a pasta `/ (root)`.
3. Salve e aguarde o link ser gerado.

## Como medir a qualidade

Use o **Lighthouse** (DevTools do Chrome > aba Lighthouse) nas categorias Performance, Accessibility, Best Practices e SEO, e registre os resultados aqui:

| Categoria      | Resultado |
| -------------- | --------- |
| Performance    |           |
| Accessibility  |           |
| Best Practices |           |
| SEO            |           |

## Próximos passos

- Converter a foto de perfil para WebP/AVIF e fornecê-la em duas resoluções.
- Publicar o site e adicionar a URL final a este README.
- Adicionar links para o código-fonte (repositório) de cada projeto nos cards.

## Autor

**Patrick Gonçalves Pinheiro**
[GitHub](https://github.com/PatrickGP11) | [LinkedIn](https://www.linkedin.com/in/patrick-gon%C3%A7alves-573939256)
