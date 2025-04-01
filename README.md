# CEP Search BR

[![npm version](https://badge.fury.io/js/cep-search-br.svg)](https://badge.fury.io/js/cep-search-br)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Coverage Status](https://coveralls.io/repos/github/Guigui3801/search-cep-br/badge.svg?branch=main)](https://coveralls.io/github/Guigui3801/search-cep-br?branch=main)

Uma biblioteca Node.js para consulta de CEPs brasileiros utilizando a API ViaCEP.

## 📦 Instalação

Instale via npm:

```bash
npm install cep-search-br
```

Ou via yarn:

```bash
yarn add cep-search-br
```

## 🚀 Como usar

### Importação
```javascript
// CommonJS
const { getAddressByCep } = require('cep-search-br');

// ES Modules
import { getAddressByCep } from 'cep-search-br';
```

### Exemplo básico
```javascript
getAddressByCep('01001000')
  .then(console.log)
  .catch(console.error);
```

### Exemplo com async/await
```javascript
async function getCEPInfo() {
  try {
    const cepInfo = await getAddressByCep('01001000');
    console.log(cepInfo);
  } catch (error) {
    console.error('Erro ao buscar CEP:', error.message);
  }
}
```

## 📋 Retorno da API

A função retorna um objeto com a seguinte estrutura:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

## ⚙️ Parâmetros

| Parâmetro | Tipo   | Obrigatório | Formato     | Exemplo    |
|-----------|--------|-------------|-------------|------------|
| cep       | string | sim         | 8 dígitos   | "01001000" |

## ❌ Tratamento de erros

A função pode lançar os seguintes erros:

- `TypeError('CEP deve ser uma string')`
- `Error('CEP inválido')` - Quando não tem 8 dígitos
- `Error('CEP não encontrado')` - Quando o CEP não existe
- `Error('Erro na requisição')` - Erros de conexão

## 🧪 Testes

Cobertura de testes de 100% com Jest:

```bash
npm test
```

## 🤝 Quer contribuir para o projeto?

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/fooBar`)
3. Commit suas mudanças (`git commit -am 'Add some fooBar'`)
4. Push para a branch (`git push origin feature/fooBar`)
5. Abra um Pull Request

## 📄 Licença

MIT © G.C. Rodrigues

Feito com ❤️ por G.C. Rodrigues - ✉️ [caixeta299@gmail.com]