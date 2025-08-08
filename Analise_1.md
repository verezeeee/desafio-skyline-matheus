Melhoria 1: Performance  
Problema: imagens e vídeos pesados impactam tempo de carregamento.  
Solução técnica: implementar lazy‑loading, compressão WebP, code‑splitting e CDN.  
Ferramentas recomendadas: react-lazyload, image-webpack-loader, React.lazy, CloudFront.

Melhoria 2: Acessibilidade  
Problema: navegação em tours 360 sem suporte a teclado ou leitores de tela.  
Solução técnica: adicionar atributos semânticos (aria-label), testes com axe-core e foco gerenciável.  
Ferramentas: eslint-plugin-jsx-a11y, react-axe, react-focus-lock.

Melhoria 3: Arquitetura de código   
Problema: funcionalidades intensivas acopladas dificultam manutenção.  
Solução técnica: modularizar em componentes isolados, centralizar estado com Redux ou Context, usar TypeScript e testes automatizados.  
Ferramentas: Redux Toolkit, TypeScript, Jest, Cypress.


## Performance — site mais leve e rápido
**Problema:**  
O site usa imagens, vídeos e tours 360 pesados. Isso deixa o carregamento lento, principalmente no celular ou internet fraca.

**O que fazer:**  
- Converter imagens para WebP/AVIF e reduzir tamanho.  
- Carregar imagens e vídeos só quando forem aparecer (*lazy loading*).  
- Dividir o código para carregar partes só quando necessário (*code splitting*).  
- Usar CDN e cache para entregar conteúdo mais rápido.  

**Ferramentas úteis:**  
`react-lazyload`, `image-webpack-loader`, `React.lazy`, CloudFront ou Cloudflare.

---

## Acessibilidade — todo mundo consegue usar
**Problema:**  
Tours 360 e players customizados podem não funcionar bem para quem usa teclado ou leitor de tela.

**O que fazer:**  
- Adicionar rótulos (`aria-label`) e elementos semânticos.  
- Permitir navegação completa pelo teclado.  
- Colocar legendas em vídeos e descrever imagens importantes.  
- Testar com ferramentas automáticas de acessibilidade.

**Ferramentas úteis:**  
`eslint-plugin-jsx-a11y`, `react-axe`, `react-focus-lock`.

---

## Arquitetura — código mais fácil de manter
**Problema:**  
Funcionalidades muito grandes e acopladas dificultam manutenção e evolução.

**O que fazer:**  
- Quebrar o código em componentes menores e independentes.  
- Centralizar estado com Redux, Context API ou Zustand.  
- Usar TypeScript para mais segurança.  
- Criar testes automatizados.

**Ferramentas úteis:**  
Redux Toolkit, TypeScript, Jest, Cypress, Storybook.

---

## Como pensei
Olhei o site como um usuário e imaginei os problemas mais comuns nesse tipo de projeto:  
1. **Peso das mídias** → afeta velocidade e SEO.  
2. **Acessibilidade limitada** → exclui parte do público.  
3. **Código acoplado** → difícil de dar manutenção.  

Começaria com melhorias rápidas (otimizar imagens, lazy loading, labels de acessibilidade) e depois atacaria arquitetura e testes.

