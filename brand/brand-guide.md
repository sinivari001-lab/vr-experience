# VR Experience -- Guia de Identidade Visual

**Versao:** 1.0
**Data:** 2026-04-06
**Projeto:** VR Experience -- Entretenimento VR a Domicilio
**Localidade:** Salvador e Lauro de Freitas, Bahia

---

## 1. Sobre a Marca

**VR Experience** e uma empresa de entretenimento que leva a realidade virtual ate a casa do cliente em Salvador e Lauro de Freitas. A marca transmite tecnologia acessivel, diversao futurista e experiencia imersiva.

**Posicionamento:** Entretenimento VR premium, acessivel e conveniente -- levamos o futuro ate voce.

**Tom de Comunicacao:**
- Entusiasmado mas profissional
- Tech-forward sem ser intimidante
- Acessivel para todas as idades (7+)
- Linguagem visual: neon, futurista, imersiva

---

## 2. Logo

### 2.1 Conceito

O logo combina um icone de headset VR estilizado (duas lentes circulares conectadas com alca lateral) com a tipografia "VR EXPERIENCE" em fonte Orbitron. O headset usa gradiente neon cyan-to-magenta, criando reconhecimento imediato do segmento VR.

**Elementos do icone:**
- Corpo do headset: retangulo arredondado (forma reconhecivel do Oculus Quest)
- Duas lentes circulares: esquerda em cyan, direita em magenta
- Ponte entre lentes: roxo (cor intermediaria)
- Alca lateral: linhas diagonais indicando a faixa de cabeca
- Reflexos nas lentes: pontos luminosos simulando profundidade

### 2.2 Arquivos de Logo

| Arquivo | Uso | Formato |
|---------|-----|---------|
| `logo-full-dark.svg` | Logo principal para fundo escuro | Horizontal, icone + texto |
| `logo-full-light.svg` | Logo principal para fundo claro | Horizontal, icone + texto (tons ajustados) |
| `logo-icon.svg` | Icone quadrado (redes sociais, app) | 100x100, headset + "VR" |
| `logo-inline.svg` | Para navbar do site | Compacto horizontal, 360x50 |
| `logo-mono-white.svg` | Monocromatico branco | Para fundos escuros sem cor |
| `logo-mono-black.svg` | Monocromatico preto | Para fundos claros sem cor |
| `favicon.svg` | Favicon do site | 64x64, apenas headset |

### 2.3 Area de Protecao

A area de protecao minima ao redor do logo e equivalente a **altura da letra "V"** do wordmark em todos os lados. Nenhum elemento grafico, texto ou borda pode invadir esta area.

```
    ┌─────────────────────────────────────┐
    │           [area protecao]           │
    │   ┌─────────────────────────────┐   │
    │   │  [headset]  VR EXPERIENCE   │   │
    │   └─────────────────────────────┘   │
    │           [area protecao]           │
    └─────────────────────────────────────┘

    Margem minima = altura da letra "V" (~20% da altura total do logo)
```

### 2.4 Tamanho Minimo

| Versao | Digital (px) | Impresso (mm) |
|--------|-------------|---------------|
| Logo completo | 200px largura | 50mm largura |
| Icone quadrado | 32px | 10mm |
| Favicon | 16px | N/A |

---

## 3. Paleta de Cores

### 3.1 Cores Primarias

| Nome | HEX | RGB | CMYK | Uso |
|------|-----|-----|------|-----|
| **Neon Cyan** | `#00e5ff` | 0, 229, 255 | 75, 0, 10, 0 | Cor principal, CTAs, destaques primarios |
| **Neon Magenta** | `#ff00ff` | 255, 0, 255 | 25, 80, 0, 0 | Cor de acento, segunda lente, gradiente |
| **Neon Purple** | `#8b5cf6` | 139, 92, 246 | 55, 65, 0, 0 | Cor de transicao, ponte, complementar |

### 3.2 Cores Secundarias

| Nome | HEX | RGB | CMYK | Uso |
|------|-----|-----|------|-----|
| **Neon Green** | `#39ff14` | 57, 255, 20 | 60, 0, 95, 0 | Badges de sucesso, precos, ofertas |
| **Neon Pink** | `#ff2d95` | 255, 45, 149 | 0, 85, 20, 0 | Alertas quentes, promocoes |
| **Neon Orange** | `#ff6b00` | 255, 107, 0 | 0, 60, 100, 0 | Urgencia, timers, destaque terciario |

### 3.3 Cores de Fundo

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| **Dark Primary** | `#050510` | 5, 5, 16 | Fundo principal do site e materiais |
| **Dark Secondary** | `#0a0a1f` | 10, 10, 31 | Secoes alternadas |
| **Dark Card** | `#0d0d25` | 13, 13, 37 | Cards e containers |
| **Dark Card Hover** | `#14143a` | 20, 20, 58 | Estado hover |

### 3.4 Cores de Texto

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| **Branco Primario** | `#ffffff` | 255, 255, 255 | Titulos e texto principal (fundo escuro) |
| **Cinza Secundario** | `#b0b8d0` | 176, 184, 208 | Texto de apoio, subtitulos |
| **Cinza Muted** | `#6b7394` | 107, 115, 148 | Labels, texto terciario |
| **Dark Text** | `#1a1a2e` | 26, 26, 46 | Texto em fundos claros |

### 3.5 Gradiente Principal

```css
background: linear-gradient(135deg, #00e5ff, #8b5cf6, #ff00ff);
```

Usado em: titulos, icone do logo, botoes hover, elementos decorativos.

### 3.6 Efeitos de Glow (Brilho Neon)

```css
/* Glow Cyan */
box-shadow: 0 0 10px rgba(0, 229, 255, 0.5),
            0 0 20px rgba(0, 229, 255, 0.3),
            0 0 40px rgba(0, 229, 255, 0.15);

/* Glow Magenta */
box-shadow: 0 0 10px rgba(255, 0, 255, 0.5),
            0 0 20px rgba(255, 0, 255, 0.3),
            0 0 40px rgba(255, 0, 255, 0.15);

/* Glow Purple */
box-shadow: 0 0 10px rgba(139, 92, 246, 0.5),
            0 0 20px rgba(139, 92, 246, 0.3),
            0 0 40px rgba(139, 92, 246, 0.15);
```

---

## 4. Tipografia

### 4.1 Fonte Display (Titulos)

**Orbitron**
- Tipo: Sans-serif geometrica futurista
- Licenca: Google Fonts (Open Font License)
- Uso: Titulos, logo, headings, precos, elementos de destaque
- Pesos disponiveis: 400, 500, 600, 700, 800, 900

| Contexto | Peso | Tamanho | Letter-spacing |
|----------|------|---------|----------------|
| Logo "VR" | 800 (ExtraBold) | 48px / 26px (inline) | 4px |
| Logo "EXPERIENCE" | 400 (Regular) | 22px / 14px (inline) | 8px / 5px |
| H1 (hero) | 700 (Bold) | clamp(2.5rem, 5vw, 4rem) | 2px |
| H2 (secoes) | 700 (Bold) | clamp(1.8rem, 4vw, 2.8rem) | 1px |
| H3 (cards) | 600 (SemiBold) | 1.2rem | 1px |
| Precos | 800 (ExtraBold) | 2.5rem | 0 |

### 4.2 Fonte Body (Corpo)

**Jost**
- Tipo: Sans-serif humanista moderna
- Licenca: Google Fonts (Open Font License)
- Uso: Paragrafos, descricoes, botoes, navegacao, formularios
- Pesos disponiveis: 400, 500, 600

| Contexto | Peso | Tamanho | Line-height |
|----------|------|---------|-------------|
| Corpo de texto | 400 (Regular) | 1rem (16px) | 1.7 |
| Subtitulos | 400 (Regular) | 1.1rem | 1.6 |
| Botoes | 600 (SemiBold) | 1rem | 1.0 |
| Navegacao | 500 (Medium) | 0.95rem | 1.0 |
| Labels/small | 400 (Regular) | 0.85rem | 1.5 |

### 4.3 Hierarquia Tipografica

```
ORBITRON 800  ──  Logo / Hero principal
ORBITRON 700  ──  Titulos de secao (H1, H2)
ORBITRON 600  ──  Subtitulos de card (H3)
JOST 600      ──  Botoes, CTAs
JOST 500      ──  Navegacao, labels de formulario
JOST 400      ──  Corpo de texto, descricoes
```

---

## 5. Aplicacoes em Brindes

### 5.1 Camiseta

**Modelo:** Camiseta 100% algodao, gola redonda

#### Frente (Preta)
- Logo completo (`logo-full-dark.svg`) centralizado no peito
- Tamanho: 25cm largura
- Posicao: 8cm abaixo da costura da gola
- Impressao: Serigrafia ou DTF com tinta neon/fluorescente

#### Costas (Preta)
- Icone do headset grande, centralizado
- Abaixo: URL "vrexperience.com.br" em Jost 400
- Tamanho icone: 20cm x 20cm
- Tamanho texto: 1.5cm altura

#### Frente (Branca)
- Logo versao fundo claro (`logo-full-light.svg`)
- Mesmas dimensoes da preta
- Impressao: Serigrafia com tintas ajustadas (tons mais escuros do gradiente)

#### Costas (Branca)
- Icone em versao monocromatica preta (`logo-mono-black.svg`)
- Mesma disposicao da preta

**Arquivo de corte:** Enviar SVG para grafica. Converter gradientes para CMYK antes da impressao.

---

### 5.2 Caneca

**Modelo:** Caneca ceramica 325ml, branca

- Logo completo (`logo-full-light.svg`) centralizado na lateral
- Tamanho: 18cm largura x 4cm altura (area de impressao segura)
- Wraparound: Logo de um lado, icone do headset do outro
- Na area oposta ao logo: slogan "O futuro na sua casa" em Orbitron 500, cor #6d3fc4
- Tecnica: Sublimacao (melhor para gradientes)

**Restricoes de producao:**
- Manter 1cm de margem do topo e fundo da area imprimivel
- Gradientes em sublimacao funcionam bem; confirmar perfil de cores com a grafica
- Area imprimivel tipica: 20cm x 8.5cm

---

### 5.3 Adesivo (Die-Cut)

**Formato:** Recortado no contorno do headset (die-cut)

- Usar `logo-icon.svg` sem o texto "VR" inferior
- Tamanho: 8cm x 6cm
- Material: Vinil adesivo brilhante resistente a agua
- Fundo: Preto (#050510) preenchendo o contorno do headset
- Bordas: 2mm de margem de corte (bleed)

**Versao alternativa:**
- Adesivo retangular com cantos arredondados (8cm x 3cm)
- Logo completo horizontal sobre fundo preto
- Mais economico para producao em lote

---

### 5.4 Chaveiro

**Modelo:** Chaveiro acrilico transparente, impressao UV dupla face

- Formato: Contorno do headset VR
- Tamanho: 5cm x 4cm
- Frente: Icone do headset colorido (gradiente cyan-magenta)
- Verso: "VR Experience" em Orbitron 400, branco
- Furo para argola: 4mm, posicionado no centro superior
- Acabamento: Resina UV para protecao

**Alternativa economica:**
- Chaveiro MDF cortado a laser
- Formato retangular 5cm x 3cm
- Impressao UV sobre fundo preto fosco

---

### 5.5 Banner / Faixa para Eventos

**Modelo:** Lona vinilica 440g, impressao digital

#### Banner Vertical (Roll-up)
- Tamanho: 80cm x 200cm
- Layout:
  ```
  ┌──────────────────────┐
  │                      │
  │    [Logo completo]   │  ← Topo, 60cm do topo
  │                      │
  │  [Headset grande]    │  ← Centro, icone 40x30cm
  │                      │
  │  "Realidade Virtual  │
  │   a Domicilio"       │  ← Orbitron 600, branco
  │                      │
  │  "Salvador & Lauro   │
  │   de Freitas"        │  ← Jost 400, cyan
  │                      │
  │  [WhatsApp icon]     │
  │  (75) XXXX-XXXX      │  ← Jost 600, neon green
  │                      │
  │  vrexperience.com.br │  ← Jost 400, cinza
  └──────────────────────┘
  ```
- Fundo: Gradiente vertical de #050510 a #0a0a1f
- Resolucao minima: 150dpi

#### Faixa Horizontal (para festas)
- Tamanho: 200cm x 60cm
- Logo completo centralizado
- Texto: "Feliz Aniversario! | Powered by VR Experience"
- Fundo: #050510
- Ilhoses nos 4 cantos para fixacao

---

### 5.6 Cartao de Visita

**Modelo:** 9cm x 5cm, papel coche 300g, laminacao fosca + verniz UV localizado

#### Frente
```
┌─────────────────────────────────────┐
│                                     │
│  [Logo completo - versao dark]      │
│                                     │
│  ─────────────── (linha gradiente)  │
│                                     │
│  Realidade Virtual a Domicilio      │  ← Jost 400, branco
│  Salvador & Lauro de Freitas - BA   │  ← Jost 400, cinza
│                                     │
└─────────────────────────────────────┘
Fundo: #050510
Verniz UV: sobre o logo e a linha gradiente
```

#### Verso
```
┌─────────────────────────────────────┐
│                                     │
│  [Nome do profissional]             │  ← Orbitron 600, branco
│  Monitor / Operador VR              │  ← Jost 400, cyan
│                                     │
│  📱 (75) XXXX-XXXX                  │  ← Jost 400, neon green
│  📧 contato@vrexperience.com.br     │  ← Jost 400, branco
│  🌐 vrexperience.com.br             │  ← Jost 400, cyan
│  📍 Salvador - BA                   │  ← Jost 400, cinza
│                                     │
│  @vrexperience.ssa                  │  ← Jost 500, magenta
│                                     │
└─────────────────────────────────────┘
Fundo: #0a0a1f
Verniz UV: sobre o nome
```

**Producao:**
- Impressao offset ou digital
- Laminacao fosca soft-touch ambos os lados
- Verniz UV localizado (logo na frente, nome no verso)
- Quantidade minima tipica: 1000 unidades

---

## 6. Usos Incorretos (NAO Fazer)

### 6.1 Com o Logo

1. **NAO** distorcer proporcionalmente (esticar ou achatar)
2. **NAO** rotacionar o logo
3. **NAO** aplicar sombra projetada (drop shadow) no logo
4. **NAO** alterar as cores do gradiente
5. **NAO** usar o logo colorido sobre fundos coloridos saturados (rosa, azul vivo, etc)
6. **NAO** reduzir abaixo do tamanho minimo (200px digital, 50mm impresso)
7. **NAO** adicionar contorno (stroke) externo ao logo
8. **NAO** usar a versao de fundo escuro sobre fundo claro (e vice-versa)
9. **NAO** separar o icone do texto na versao horizontal (a nao ser usando o icone standalone)
10. **NAO** recriar o logo em outra fonte

### 6.2 Com as Cores

1. **NAO** usar as cores neon como fundo de grandes areas (sao cores de destaque)
2. **NAO** combinar neon cyan com neon green lado a lado (vibram opticamente)
3. **NAO** usar texto neon sobre fundo branco sem ajuste de tom (usar versoes escurecidas)
4. **NAO** imprimir cores neon em CMYK sem prova de cor (neons sao mais vibrantes em RGB)

### 6.3 Com a Tipografia

1. **NAO** substituir Orbitron por outra fonte display
2. **NAO** usar Orbitron para corpo de texto longo (apenas titulos/destaques)
3. **NAO** usar peso Regular de Orbitron em tamanhos menores que 14px
4. **NAO** misturar mais de 2 pesos de Orbitron na mesma composicao

---

## 7. Especificacoes Tecnicas para Producao

### 7.1 Digital

| Formato | Uso | Perfil de Cor |
|---------|-----|---------------|
| SVG | Site, apps, favicon | sRGB |
| PNG (2x) | Redes sociais, email | sRGB |
| WebP | Site (otimizado) | sRGB |

### 7.2 Impressao

| Formato | Uso | Perfil de Cor | Resolucao |
|---------|-----|---------------|-----------|
| PDF/X-1a | Grafica offset | CMYK (FOGRA39) | 300dpi |
| AI/EPS | Editavel para grafica | CMYK | Vetorial |
| TIFF | Sublimacao (canecas) | CMYK | 300dpi |

### 7.3 Nota sobre Cores Neon em Impressao

As cores neon (#00e5ff, #ff00ff) sao altamente vibrantes em telas (RGB) mas perdem intensidade em impressao CMYK. Recomendacoes:

1. **Sempre solicitar prova de cor** antes de producao em lote
2. **Para serigrafia:** Usar tintas fluorescentes/neon especiais (Pantone Neon Coated)
3. **Para sublimacao:** Resultados bons; gradientes reproduzem bem
4. **Para offset:** Considerar quinta cor (Pantone spot) para ciano e magenta neon
5. **Alternativa economica:** Usar os tons CMYK aproximados (ficam ~70-80% da vibrancia RGB)

### 7.4 Correspondencias Pantone (Aproximadas)

| Cor Digital | Pantone Solid Coated | Nota |
|-------------|---------------------|------|
| Neon Cyan #00e5ff | PANTONE 311 C | Mais proximo; considerar Pantone Neon Blue |
| Neon Magenta #ff00ff | PANTONE Rhodamine Red C | Excelente match |
| Neon Purple #8b5cf6 | PANTONE 2665 C | Boa aproximacao |
| Neon Green #39ff14 | PANTONE 802 C (Neon) | Usar tinta neon |

---

## 8. Aplicacao no Site (Codigo SVG Inline)

O logo esta integrado diretamente no HTML do site (`index.html`) como SVG inline no navbar. A implementacao atual usa:

**Navbar logo (SVG inline):**
```html
<a href="#" class="nav-logo" title="VR Experience" aria-label="VR Experience - Pagina inicial">
  <svg viewBox="0 0 360 50" fill="none" role="img" aria-hidden="true">
    <!-- Conteudo de logo-inline.svg embutido diretamente -->
  </svg>
</a>
```

**CSS responsivo aplicado:**
```css
.nav-logo svg { height: 40px; width: auto; }
.navbar.scrolled .nav-logo svg { height: 34px; }
@media (max-width: 768px) { .nav-logo svg { height: 32px; } }
```

**Favicon:**
```html
<link rel="icon" type="image/svg+xml" href="brand/favicon.svg">
```

**Alternativa com img tag** (para outros contextos):
```html
<img src="brand/logo-inline.svg" alt="VR Experience" height="40">
```

---

## 9. Inventario de Arquivos

```
sites/vr-experience/brand/
├── brand-guide.md           ← Este documento
├── logo-full-dark.svg       ← Logo principal (fundo escuro)
├── logo-full-light.svg      ← Logo principal (fundo claro)
├── logo-icon.svg            ← Icone quadrado (redes sociais)
├── logo-inline.svg          ← Logo para navbar do site
├── logo-mono-white.svg      ← Monocromatico branco
├── logo-mono-black.svg      ← Monocromatico preto
└── favicon.svg              ← Favicon SVG
```

---

## 10. Checklist de Entrega para Grafica

Ao enviar materiais para producao, incluir:

- [ ] Arquivos vetoriais SVG/PDF de cada peca
- [ ] Especificacoes de tamanho em milimetros
- [ ] Perfil de cor (CMYK para impressao, RGB para digital)
- [ ] Provas de cor solicitadas antes de tiragem final
- [ ] Sangria (bleed) de 3mm em todos os materiais impressos
- [ ] Fontes convertidas em curvas (outlines) nos arquivos de impressao
- [ ] Referencia Pantone para cores criticas (cyan e magenta neon)

---

*VR Experience -- Identidade Visual v1.0*
*Desenvolvido por Design Squad -- @aaron-draplin (Logo) com direcionamento @design-chief*
