# Weather App

Aplicação simples em React que consome a API do OpenWeatherMap para mostrar o clima atual de uma cidade.

Principais pontos:
- Stack: React + Vite
- Consome a OpenWeatherMap (Current Weather)
- Mostra temperatura, descrição, umidade e ícone do clima

Requisitos:
- Node.js 18+ e npm/yarn
- Chave de API do OpenWeatherMap (https://openweathermap.org/)

Como rodar localmente:

1. Instalar dependências

```bash
cd projects/weather-app
npm install
```

2. Criar arquivo `.env` na raiz do projeto com a variável:

```
VITE_OPENWEATHER_KEY=SUA_CHAVE_AQUI
```

3. Rodar em desenvolvimento

```bash
npm run dev
```

4. Abrir o endereço que o Vite mostrar (ex: `http://localhost:5173`).

Observações:
- A chave de API deve ser mantida privada (não comitar em repositórios públicos).
- Quando pronto, você pode fazer build com `npm run build` e publicar o `dist`.
