# Casa Frente Mar — Site Oficial

Site institucional da casa de temporada em Porto Novo, Caraguatatuba (SP), construído
para converter visitantes em reservas diretas pelo WhatsApp.

**Stack:** React 19 · Vite · TypeScript · React Router · Tailwind CSS v4 · Framer Motion ·
Lucide Icons.

## Por que Vite (e não Next.js)

O site é uma landing page estática de uma página só, sem necessidade de renderização no
servidor, rotas dinâmicas ou APIs. Vite gera um build 100% estático, leve e rápido, com
deploy simples no GitHub Pages via GitHub Actions — exatamente o que este projeto precisa.
Next.js adicionaria complexidade (roteamento de servidor, `output: "export"` para publicar
em Pages) sem trazer benefício real para este caso de uso.

---

## Como rodar localmente

```bash
npm install
npm run dev
```

O site sobe em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview   # serve o build localmente para conferir
```

## Deploy no GitHub Pages

Duas formas, pode usar qualquer uma:

1. **Automático (recomendado):** todo push na branch `main` dispara o workflow em
   `.github/workflows/deploy.yml`, que builda o site e publica no GitHub Pages.
   Na primeira vez, vá em **Settings → Pages** do repositório e selecione
   **Source: GitHub Actions**.

2. **Manual:**
   ```bash
   npm run deploy
   ```
   Isso builda o projeto e publica a pasta `dist/` na branch `gh-pages` usando o
   pacote `gh-pages`.

> O `vite.config.ts` já está configurado com `base: "/casa-frente-mar/"`. Se o nome do
> repositório no GitHub mudar, atualize esse valor (e a URL em `src/config/site.ts`,
> `index.html` e `public/manifest.json`) de acordo.

---

## Mini CMS — como editar o conteúdo sem mexer no código

Praticamente todo o conteúdo do site fica em arquivos de dados, fora dos componentes React:

| O que editar                          | Arquivo                          |
| -------------------------------------- | --------------------------------- |
| Telefone / WhatsApp / redes sociais / mapa | `src/config/site.ts`         |
| Textos do Hero, "A Casa", Réveillon, CTA final | `src/data/site.json`     |
| Comodidades (cards)                    | `src/data/amenities.json`         |
| Diferenciais ("por que reservar comigo")| `src/data/differentials.json`    |
| Fotos da galeria                       | `src/data/gallery.json` + arquivos em `src/assets/images/` |
| Depoimentos / avaliações               | `src/data/testimonials.json`      |
| Perguntas frequentes                   | `src/data/faq.json`               |
| Locais próximos (praias, mercado, etc.)| `src/data/nearby.json`            |

### Trocar o número de WhatsApp

Edite `src/config/site.ts`:

```ts
whatsappNumber: "5512997695607", // DDI + DDD + número, só dígitos
phoneDisplay: "(12) 99769-5607", // como aparece formatado no site
```

### Trocar fotos

1. Substitua o arquivo dentro de `src/assets/images/` **mantendo o mesmo nome**
   (ex.: sobrescreva `piscina-01.svg` por uma foto real — pode inclusive trocar a
   extensão, só precisa também atualizar o campo `file` correspondente em
   `src/data/gallery.json`).
2. Não é necessário alterar nenhum componente: as imagens são resolvidas
   automaticamente pelo nome do arquivo (`src/lib/images.ts`).
3. Veja `image-prompts.md` para prompts prontos de geração de imagens por IA,
   enquanto as fotos profissionais não ficam prontas.

### Preço e contagem regressiva do Réveillon

Em `src/data/site.json`, bloco `reveillon`:

```json
"targetDate": "2026-12-31T20:00:00-03:00"
```

---

## Estrutura do projeto

```
src/
  components/   # componentes reutilizáveis (ui, layout, gallery)
  sections/     # seções da home (Hero, Galeria, Comodidades, Réveillon, ...)
  pages/        # páginas roteadas (Home, NotFound)
  hooks/        # hooks customizados (scroll, countdown, lightbox, ...)
  data/         # "mini CMS" em JSON
  config/       # configuração do site (telefone, links, mapa)
  lib/          # utilitários (resolução de imagens, ícones)
  types/        # tipos TypeScript compartilhados
  assets/images/# fotos da casa (substituíveis)
  styles/       # CSS global + tokens de tema (Tailwind v4)
```

## SEO

- `index.html` com meta tags, Open Graph, Twitter Card e dados estruturados
  (`schema.org/LodgingBusiness`).
- `public/robots.txt` e `public/sitemap.xml`.
- `public/manifest.json` para instalação como PWA.
- Palavras-chave alvo: casa de temporada Caraguatatuba, casa com piscina Caraguatatuba,
  airbnb Caraguatatuba, casa para réveillon, aluguel de temporada Caraguatatuba.

## Performance

- Imagens com `loading="lazy"` fora da dobra inicial.
- Componentes leves, sem dependências pesadas além de Framer Motion.
- CSS gerado pelo Tailwind v4 (JIT), sem CSS não utilizado.
- Recomenda-se rodar um Lighthouse audit após substituir os placeholders pelas fotos
  finais (comprimidas em WebP/AVIF) para manter a pontuação de performance alta.
