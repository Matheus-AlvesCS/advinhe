# Adivinhe 🎮

Jogo interativo de advinhação de palavras (estilo jogo da forca) construído com React, TypeScript e Vite. Projeto realizado como prática após as aulas de desenvolvimento front-end do curso FullStack da RocketSeat.

## 🛠 Tecnologias

- **React 19** - Framework UI com Hooks modernos
- **TypeScript** - Type safety e melhor experiência de desenvolvimento
- **Vite** - Build tool ultra-rápido com hot module replacement
- **CSS Modules** - Estilos com escopo local por componente

## 📚 O que Aprendi

- ✅ Estrutura de componentes reutilizáveis e tipados
- ✅ Gerenciamento de estado com useState e useEffect
- ✅ CSS Modules para evitar conflitos de classe
- ✅ Validação de entrada em tempo real (RegExp, maxLength)
- ✅ Separação entre lógica (App.tsx) e apresentação (componentes)
- ✅ Game design equilibrado (tentativas dinâmicas = tamanho da palavra)
- ✅ Estrutura de dados escalável com tipos imutáveis
- ✅ Nomes descritivos e código auto-documentado

## 🏗 Estrutura do Projeto

```
src/
├── components/               # Componentes reutilizáveis
│   ├── Button/               # Botão customizado
│   ├── Header/               # Logo, tentativas, reiniciar
│   ├── Input/                # Campo de entrada de letra
│   ├── Letter/               # Bloco visual de letra
│   ├── LettersUsed/          # Grid histórico de letras
│   └── Tip/                  # Exibição de dica
├── utils/
│   └── words.ts              # Banco de dados de palavras
├── App.tsx                   # Componente principal com lógica do jogo
├── main.tsx                  # Ponto de entrada React
├── app.module.css            # Estilos globais
└── global.css                # Reset CSS
```

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+
- npm 10+

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse em: **http://localhost:5173**

Servidor com hot reload automático via Vite.

### Build para Produção

```bash
npm run build
```

Gera saída otimizada em `dist/`.

### Preview da Build

```bash
npm run preview
```

## 🎮 Como Jogar

1. Veja a **dica** para adivinhar a palavra
2. **Digite uma letra** no campo de entrada
3. **Clique em Confirmar** ou pressione Enter
4. Letras aparecem conforme você acerta
5. **Histórico de letras** mostra acertos (verde) e erros (vermelho)
6. **Vença** revelando toda a palavra
7. **Reinicie** para jogar novamente

## 🛡 Boas Práticas Implementadas

### 1. TypeScript Stricto

Interfaces bem definidas para componentes e dados:

```typescript
interface HeaderProps {
  current: number
  max: number
  onRestart: () => void
}

type Challenge = {
  id: number
  word: string
  tip: string
}
```

### 2. Componentes Funcionais com Hooks

Uso de `useState` e `useEffect` para gerenciamento de estado:

```typescript
const [selectedWord, setSelectedWord] = useState<Challenge | null>(null)
const [lettersUsed, setLettersUsed] = useState<string[]>([])

useEffect(() => {
  startGame()
}, [])
```

### 3. Validação em Camadas

RegExp + atributos HTML garantem apenas letras válidas:

```typescript
// Apenas aceita a-z
if (/[^a-zA-Z]/.test(value)) {
  alert("Digite apenas letras!")
  return
}
```

### 4. CSS Modules

Arquivo `.module.css` por componente evita conflitos:

```typescript
// Button.module.css (escopo local)
.button {
  padding: 8px 16px;
  border-radius: 4px;
}
```

### 5. Separação de Responsabilidades

- `App.tsx` - Lógica do jogo
- `components/` - Componentes puros (apenas renderizam props)
- `utils/words.ts` - Dados isolados

### 6. Estrutura de Dados Escalável

```typescript
// Fácil de estender e manter versionado
export const WORDS: Challenge[] = [
  { id: 1, word: "REACT", tip: "Biblioteca JavaScript para UIs" },
  { id: 2, word: "VITE", tip: "Build tool ultra-rápido" },
]
```

### 7. Game Design Equilibrado

Tentativas dinâmicas baseadas no tamanho da palavra:

```typescript
const maxAttempts = selectedWord.word.length + 5
```

## 📊 Banco de Dados de Palavras

Adicione novas palavras em [src/utils/words.ts](src/utils/words.ts):

```typescript
{ id: 6, word: "TYPESCRIPT", tip: "JavaScript com tipos" }
```

---

**Autor:** Matheus Alves | RocketSeat Full-Stack
