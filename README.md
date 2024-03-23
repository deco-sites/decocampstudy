# STUDY TASKS

### Nota: Todas as tasks foram executadas utilizando textos lorem e imagens aleatórias de catálogos públicos na web, o foco deste repositório é nas funcionalidades e as aplicação no admin da deco.

### Nota: Os componentes foram estilizados somente quando solicitados em task de estilizações.

[x] Acesse o admin, apps e o site.ts associado ao site, ou clique em editar SEO para editar as opções de SEO.
[x] Em seguida, crie sua primeira página institucional, a /quem-somos, que irá descrever um pouco sobre quem construiu a loja.

-- Utilize as sections existentes para criar uma página que deve conter:
[x] Hero com imagem
[x] Pegue uma imagem de catálogo, gerada por AI, ou uma imagem pessoal para simbolizar a natureza da loja.
[x] Coloque um breve texto descrevendo o motivacional da loja e o uso da plataforma deco
[x] No hero, faça uma chamada/botão para o usuário acessar um conteúdo relevante, mas externo (ex.: um site regional, da sua empresa, ou o que achar interessante)

-- Descrição da loja
[x] Um texto descrevendo os produtos e experiências que são foco da loja

-- Bônus (usa conteúdo a ser explorado ainda): Uma section com um cupom
[x] Construa uma section cupom.tsx em código e que recebe como propriedades: o código do cupom, e uma descrição com os benefícios que o cupom trás


[x] Além disso, vamos impedir que o site seja indexado por bots da internet. Para tanto, atualize (e suba) o arquivo: static/robots.txt com o seguinte conteúdo:

```txt
User-agent: *
Disallow: /
```

[x] Altere o tema do seu site (em apps) para seguir as cores do tema que você deseja
[x] Depois, comece criando uma nova página, a /culturas
[x] Um header com os apontamentos para /quem-somos e /culturas
[x] Um texto indicando a temperatura atual em um dos locais onde essa cultura é predominante
[x] Instale o app weather
[x] Crie uma section para receber a temperatura como propriedade (https://github.com/deco-cx/apps/blob/main/weather/loaders/temperature.ts)
[x] Um texto citando um aspecto de uma cultura nacional
[x] Um banner com duas imagens referentes a produtos dessa cultura
[x] Salve o header de forma global e adicione também na página /quem-somos
[x] Segmente a página /culturas por data e hora:
[] Caso o usuário acesse a página no dia 1 de abril, adicione, no final da página, um banner de cupom de 5% nos produtos com patrocínio do deco.day
[x] Estilize o texto de temperatura de modo que seja um botão redondo flutuante.

# Thanks to all contributors !

<a href="https://github.com/deco-sites/fashion/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=deco-sites/fashion" alt="Storefront Contributors" />
</a>
