# Sistema de Chat em Tempo Real com Node.js e WebSockets

Aplicação web de mensagens instantâneas desenvolvida em Node.js. Utiliza o protocolo WebSocket para comunicação bidirecional em tempo real entre múltiplos clientes e armazena o histórico de conversas de forma persistente num ficheiro JSON.

## Funcionalidades

- Comunicação instantânea entre múltiplos utilizadores em simultâneo.
- Servidor HTTP integrado para servir a interface web.
- Gestão modular de ligações WebSocket.
- Persistência automática do histórico de mensagens em `messages.json`.

## Pré-requisitos

- **Node.js** (versão 16 ou superior) instalado no sistema.
- **npm** (gestor de pacotes incluído com o Node.js).

## Como instalar as dependências

1. Faça o clone deste repositório ou transfira os ficheiros para uma pasta local.
2. Abra o terminal na pasta raiz do projeto.
3. Execute o comando seguinte para instalar o `express` e o `ws`:

```bash
npm install
```

## Como executar o servidor

1. No terminal, dentro da pasta do projeto, inicie a aplicação:

```bash
npm start
```

2. O terminal deverá apresentar a confirmação:
   `Servidor HTTP e WebSocket ativo em http://localhost:3000`

## Como aceder à aplicação no navegador

1. Abra o seu navegador web (Google Chrome, Firefox, Edge, Safari, etc.).
2. Aceda ao endereço: `http://localhost:3000`
3. Para testar a troca de mensagens em tempo real, abra o mesmo link em dois ou mais separadores diferentes, insira nomes de utilizador distintos e envie mensagens.
