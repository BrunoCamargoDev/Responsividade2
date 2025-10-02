# 💡 Alinhamento Responsivo com Flexbox e Media Queries

Este projeto é uma demonstração prática de como usar **Flexbox** e **Media Queries** para criar layouts responsivos que se adaptam dinamicamente a diferentes larguras de tela (desktop, tablet e mobile).

## 🧩 Tecnologias Utilizadas

- **HTML5**
- **CSS3 (Flexbox + Media Queries)**
- **JavaScript (DOM e Eventos)**

## 📱 Funcionalidades

- Alinhamento dinâmico dos elementos com `flexbox`.
- Responsividade com media queries:
  - **Desktop** (> 900px): `justify-content: center`
  - **Tablet** (601px – 900px): `justify-content: space-between`
  - **Mobile** (<= 600px): `flex-direction: column; justify-content: flex-start`
- Detecção automática da largura da tela via JavaScript.
- Exibição em tempo real do modo de alinhamento atual e largura da tela.

## 📷 Preview

Você verá 3 "itens" que se realinham automaticamente conforme a largura da tela muda.

| Tamanho da Tela | Alinhamento        | Exemplo Visual           |
|-----------------|--------------------|---------------------------|
| > 900px         | Centro             | [Item1] [Item2] [Item3]   |
| 601px – 900px   | Espaçado           | [Item1]     [Item2]     [Item3] |
| <= 600px        | Coluna Centralizada| [Item1] <br> [Item2] <br> [Item3] |

## 📂 Estrutura dos Arquivos

```bash
docs/  
├── index.html       # Estrutura principal da página
├── style.css        # Estilos com Flexbox e Media Queries
└── script.js        # Script para mostrar a largura da tela e modo atual
```

---

## ▶️ Como Usar

- Clone ou baixe o repositório
- Abra o arquivo `index.html` em um navegador moderno
- Redimensione a janela do navegador ou use o Modo Responsivo do DevTools
- Observe o comportamento dos itens e o texto indicando a largura da tela

---

## 🔍 Demonstração dos Conceitos
### Este projeto reforça os seguintes conceitos do Front-End:
- `display: flex`, `justify-content`, `align-items`, `flex-direction`
- Responsividade com `@media queries`
- Manipulação do DOM com JavaScript
- Detecção de redimensionamento da janela com `window.addEventListener("resize")`
