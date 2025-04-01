# 📍 CEP Search BR

[![npm version](https://badge.fury.io/js/cep-search-br.svg)](https://badge.fury.io/js/cep-search-br)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Coverage Status](https://coveralls.io/repos/github/Guigui3801/cep-search-br/badge.svg?branch=main)](https://coveralls.io/github/Guigui3801/cep-search-br?branch=main)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

Uma biblioteca simples e eficiente para busca de CEPs brasileiros utilizando a API do ViaCEP.

## 🚀 Instalação

Instale a biblioteca usando npm ou yarn:

```sh
npm install search-cep-br
```

ou

```sh
yarn add search-cep-br
```

## 🌎 Como Usar

Basta importar a biblioteca e chamar a função de busca por CEP:

```javascript
import searchCep from "search-cep-br";

async function buscarEndereco() {
  try {
    const endereco = await searchCep("01001000");
    console.log(endereco);
  } catch (error) {
    console.error("❌ Erro ao buscar CEP:", error);
  }
}

buscarEndereco();
```

### ✅ Retorno esperado:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "cidade": "São Paulo",
  "estado": "SP"
}
```

## 📌 API

### `searchCep(cep: string): Promise<Object>`

- 🏷 **cep**: String contendo apenas números do CEP.
- 🔄 **Retorno**: Um objeto com os dados do endereço ou um erro caso o CEP não seja encontrado.

## 🤝 Contribuição

💡 Tem uma ideia para melhorar a biblioteca? Fique à vontade para contribuir! Abra uma issue ou envie um pull request no [GitHub](https://github.com/seu-usuario/search-cep-br).

## 📜 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

🔎 **Feito para facilitar suas buscas!** 🚀