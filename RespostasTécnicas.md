1. Como você costuma estruturar seus commits no Git?
  Normalmente eu costumo estruturar meus commits com um prefixo que indica o tipo de alteração, seguido de uma breve descrição do que foi alterado. ex: "feat: login" ou "fix: bug de login".

2. O que você sabe sobre AWS S3 e como colocaria um site estático lá?
  Meu último trabalho exigiu alguns conhecimentos de infra, tive que integrar o S3 em um projeto. O S3 é um serviço de armazenamento em nuvem que permite armazenar arquivos, com isso em mente, é possível criar um bucket, fazer upload dos arquivos do site estático, permitir o acesso público e configurar como site estático.

3. Qual a diferença entre contextAPI e Redux em React?
  Ambos são formas de gerenciamento de estados, contextAPI é uma ferramenta nativa do React, enquanto Redux é uma biblioteca que precisa ser instalada, o contextAPI é mais simples e mais leve, o que pode facilitar muitas vezes, mas sofre em coisas que o Redux lida muito bem, como interações mais complexas entre componentes, escalabilidade e testes.

4. Como você integra uma fonte do Google Fonts no Tailwind?
  O Tailwind tem um plugin que permite integrar fontes do Google Fonts, basta adicionar a fonte no arquivo de configuração do Tailwind (tailwind.config.js) e usar a classe font-[nome da fonte] no elemento que deseja.
5. Como você organiza componentes reutilizáveis em um projeto Next.js?
  Normalmente eu crio uma pasta chamada "components" na raiz do projeto, dentro dela crio subpastas para os componentes, como "buttons", "inputs", "modals" etc. e dentro de cada subpasta crio os componentes reutilizáveis.
