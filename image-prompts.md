# Prompts para geração de imagens em IA

Este arquivo reúne prompts detalhados para gerar as fotos reais da casa em ferramentas de
IA (Midjourney, DALL·E, Stable Diffusion, Firefly etc.) até que as fotos profissionais
fiquem prontas. Todos os prompts foram escritos para gerar imagens **hiper-realistas**,
como fotografia profissional de imóveis, consistente com o estilo de casas de alto padrão
em Caraguatatuba (litoral norte de SP): luz natural, cores quentes de verão, acabamentos
claros, piscina de azulejo azul, madeira clara.

Depois de gerar, salve o arquivo em `src/assets/images/` **com o mesmo nome** do
placeholder que ele substitui (ver tabela no final) — o site já vai carregar a imagem nova
automaticamente, sem precisar mexer em nenhum código.

---

## Estilo base (adicione a qualquer prompt abaixo)

```
professional real estate photography, hyper-realistic, 35mm lens, natural daylight,
shot on Canon EOS R5, ultra sharp focus, high dynamic range, wide angle interior shot,
warm summer color grading, clean and organized space, no people unless specified,
8k resolution, architectural digest style
```

---

## 1. Fachada

```
Front facade of a modern single-story Brazilian beach house in Caraguatatuba, Brazil,
white and light beige walls, large glass sliding doors, tropical plants and palm trees
in the front yard, paved driveway, clear blue sky, bright midday sun, tropical coastal
architecture, minimalist modern design, professional real estate photography,
hyper-realistic, 8k, ultra sharp
```

## 2. Piscina (vista principal)

```
Rectangular swimming pool with a stone waterfall feature on the side, turquoise clear
water, wooden pergola with string lights above a covered lounge area, tropical potted
plants, wood-textured accent wall, sunny afternoon light reflecting off the water,
Brazilian beach house backyard, hyper-realistic professional real estate photography,
low-angle shot near the water surface, 8k ultra sharp
```

## 3. Piscina (vista lateral / deck)

```
Side view of a home swimming pool with light blue tiled edges, wooden deck flooring,
white plastic outdoor chairs and a dining table under a covered pergola, brick barbecue
structure in the background, lush green plants, warm golden hour sunlight,
hyper-realistic real estate photography, 8k, ultra sharp focus
```

## 4. Área gourmet

```
Covered outdoor gourmet area attached to a Brazilian house, brick barbecue (churrasqueira),
long wooden dining table with white chairs, pendant string lights, stone countertop bar
with wooden stools, view of a swimming pool to the side, warm afternoon light,
hyper-realistic architectural photography, 8k, ultra sharp
```

## 5. Cozinha

```
Modern fully equipped kitchen interior, white cabinetry, light wood countertops,
stainless steel refrigerator and stove, pendant lighting over a small island,
natural light from a window, clean and organized, minimalist coastal design,
hyper-realistic real estate interior photography, 8k, ultra sharp focus
```

## 6. Sala de estar

```
Cozy modern living room interior, light gray sofa with cushions, wooden coffee table,
large wall-mounted Smart TV, natural light coming through sheer curtains, light wood
flooring, warm neutral tones, coastal minimalist decor, plants in the corner,
hyper-realistic real estate interior photography, 8k, ultra sharp focus
```

## 7. Quarto de casal

```
Comfortable master bedroom interior, queen-size bed with white and beige linens,
wooden headboard, soft natural light from a window with sheer curtains, minimalist
coastal decor, light wood floor, small reading nook, hyper-realistic real estate
interior photography, 8k, ultra sharp focus
```

## 8. Quarto com beliches

```
Bright bedroom with two wooden bunk beds, white and blue striped bedding, nautical
coastal decor, natural light from a window, playful yet organized space designed for
kids and families, light wood flooring, hyper-realistic real estate interior
photography, 8k, ultra sharp focus
```

## 9. Banheiro

```
Modern clean bathroom interior, white subway tile walls, floating wood-tone vanity,
frameless glass shower enclosure, matte black fixtures, natural light, spa-like
minimalist coastal design, hyper-realistic real estate interior photography, 8k,
ultra sharp focus
```

## 10. Churrasqueira (detalhe)

```
Close-up detail shot of a Brazilian brick barbecue (churrasqueira) with lit charcoal
grill, wooden cutting board and skewers nearby, warm evening light, cozy outdoor
gourmet atmosphere, hyper-realistic food/lifestyle photography, 8k, shallow depth of
field
```

## 11. Varanda

```
Covered veranda of a beach house overlooking a swimming pool, wooden ceiling with
pendant lights, outdoor lounge chairs, tropical potted plants, warm late afternoon
light, relaxed coastal lifestyle atmosphere, hyper-realistic architectural photography,
8k, ultra sharp focus
```

## 12. Decoração (detalhe)

```
Close-up styled detail shot of coastal home decor: woven straw baskets, linen textiles,
a small potted palm, wooden tray with candles, soft natural window light, warm neutral
tones, minimalist Brazilian beach house interior styling, hyper-realistic photography,
8k, shallow depth of field
```

## 13. Pôr do sol

```
Golden hour sunset view from a Brazilian beach house terrace, silhouettes of palm trees,
warm orange and pink sky reflecting on a swimming pool, calm and serene atmosphere,
cinematic composition, hyper-realistic landscape photography, 8k, ultra sharp focus
```

## 14. Praia próxima

```
Wide shot of a calm tropical Brazilian beach in Caraguatatuba, São Paulo coastline,
palm trees along the shore, soft morning light, gentle waves, clean golden sand,
distant green mountains in the background, hyper-realistic travel photography, 8k,
ultra sharp focus
```

## 15. Família na piscina

```
Happy Brazilian family with two children playing and swimming together in a home
backyard swimming pool, candid joyful moment, splashing water, bright sunny day,
warm natural lighting, lifestyle real estate photography, hyper-realistic, 8k,
shot on 50mm lens, shallow depth of field
```

---

## Mapa de arquivos (nome do placeholder → conteúdo)

| Prompt              | Arquivo em `src/assets/images/` |
| -------------------- | -------------------------------- |
| Fachada              | `fachada-01.svg` → `fachada-01.jpg` |
| Piscina (principal)  | `piscina-01.svg` → `piscina-01.jpg` |
| Piscina (deck)       | `piscina-02.svg` → `piscina-02.jpg` |
| Área gourmet         | `area-gourmet-01.svg` → `area-gourmet-01.jpg` |
| Cozinha              | `cozinha-01.svg` → `cozinha-01.jpg` |
| Sala                 | `sala-01.svg` → `sala-01.jpg` |
| Quarto de casal      | `quarto-01.svg` → `quarto-01.jpg` |
| Quarto com beliches  | `quarto-02.svg` → `quarto-02.jpg` |
| Banheiro             | `banheiro-01.svg` → `banheiro-01.jpg` |
| Varanda              | `varanda-01.svg` → `varanda-01.jpg` |
| Pôr do sol           | `entorno-01.svg` → `entorno-01.jpg` |
| Praia próxima        | `entorno-02.svg` → `entorno-02.jpg` |
| Capa do site (Hero)  | `hero.svg` → `hero.jpg` |

> Dica: se trocar a extensão (de `.svg` para `.jpg`), atualize também o nome do arquivo
> correspondente em `src/data/gallery.json` (campo `file`) e em `src/sections/Hero.tsx`,
> `AboutHouse.tsx`, `Reveillon.tsx` e `FinalCta.tsx`, que referenciam algumas imagens
> diretamente pelo nome do arquivo.
