# CONTEXTO – Tamapet

## 1. Visão Geral do Projeto
Tamapet é um jogo educativo de bichinho virtual inspirado em Tamagotchi. Desenvolvido com **HTML, CSS e JavaScript**, tem como objetivo ensinar lógica de programação, estado, persistência e tempo real.

### 1.1 Objetivos Principais
- Ensino via **vibe coding** e explicação didática.
- Estruturar ciclos de vida do pet (infância → adulto → velhice).
- Exemplificar armazenamento local (`localStorage`).
- Manter simplicidade para permitir continuidade por desenvolvedores iniciantes ou agentes de IA.

### 1.2 Público-Alvo
- Desenvolvedores iniciantes
- Colaboradores remotos, como Jules
- Agentes de programação (Codex/Jules)

---

## 2. Estrutura do Projeto

| Arquivo/Pasta               | Descrição                                                                 |
|----------------------------|---------------------------------------------------------------------------|
| `index.html`               | Interface do usuário com botões de ação e áreas de status                 |
| `style.css`                | Estilização visual básica do jogo                                        |
| `main.js`                  | Lógica principal: ciclo de vida, alimentação, sono, estado, persistência |
| `assets/`                  | Imagens e sons (a serem adicionados)                                     |
| `README.md`                | Informações resumidas sobre o projeto                                    |
| `CONTEXTO.md`              | Este arquivo — contexto detalhado de funcionamento e fluxos             |
| `TODO.md`                  | Lista de tarefas pendentes com critérios de validação                    |

---

## 3. Fluxos e Mecânicas

### 3.1 Ciclo de Vida
- O pet passa por três fases:
  - **Infância**: primeira 24 h desde criação
  - **Adulto**: após completar 24 h
  - **Velhice**: após 48 h
- Data de criação salva em `localStorage` como timestamp.

### 3.2 Alimentação e Energia
- Chamada `alimentarPet()`:
  - aumenta o nível de energia +10 unidades, máximo de 100.
  - salva no `localStorage`.
  - atualiza o UI (barra de energia).
  - loga no console com timestamp.
- Se energia estiver abaixo de 20 por mais de 5 minutos, o pet entra em modo de sono (ver 3.3).

### 3.3 Sono
- Função `checkSleepCycle()` executada a cada 60 seg:
  - Se energia < 20 por 5 min, ativa `entrarModoSono()`.
  - Modo de sono reduz despesa e permite recuperação automática de energia.
  - Quando energia > 80, sai do modo de sono.

### 3.4 Salvamento
- Ação manual via botão: salva `state = { energia, fase, timestamps }`.
- Até 2 slots disponíveis via `localStorage`.
- Cada slot contém JSON com os dados mencionados.

---

## 4. Decisões e Restrições

- **Sem frameworks externos (MVP)** para manter simplicidade.
- **Comentários explicativos em cada função**, para leitura por IA/humano.
- **Tempo real simulado no navegador**, sem servidor backend.

---

## 5. Instruções para IA/Jules

### 5.1 Indicações de contexto
Inclua comentários como:
```js
// [IA CONTEXTO] Função alimentarPet(): aumenta energia e salva estado
// [IA CONTEXTO] checkSleepCycle(): chamado a cada 1 min para avaliar estado
