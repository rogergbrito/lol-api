# API League of Legends

Esta API permite que você obtenha informações sobre os campeões do jogo, filtrando-os por função (role), dificuldade (difficulty) e nome (name). Através do endpoint fornecido abaixo.

## Endpoint

https://lol-api-six.vercel.app/api/champions

### Você pode utilizar os seguintes parâmetros de consulta para filtrar os resultados:

- `role`: Filtra os campeões de acordo com a função desejada. Os valores válidos são: "Fighter", "Mage", "Assassin", "Marksman", "Tank" e "Support".
- `difficulty`: Filtra os campeões com base na dificuldade desejada. Os valores válidos são: "Low", "Moderate" e "High".
- `name`: Filtra os campeões pelo nome inserido na query.

### Você pode combinar esses parâmetros para obter resultados mais específicos. Por exemplo:

- `/api/champions?role=Fighter&difficulty=Low`: Retorna os campeões da função lutador com dificuldade baixa.
- `/api/champions?difficulty=Moderate&name=Ahri`: Retorna os campeões com dificuldade moderada e cujo nome contenha "Ahri".

## Exemplos de Uso

### Obter todos os campeões

**Requisição:**

GET /api/champions

**Resposta:**

```json
[
  {
    "name": "Ahri",
    "role": "Mage",
    "difficulty": "Moderate",
    "history": "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making."
  },
  {
    "name": "Ashe",
    "role": "Marksman",
    "difficulty": "Moderate",
    "history": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands."
  },
]
```

### Filtrar por função

**Requisição:**

GET /api/champions?role=Tank

**Resposta:**

```json

[
  {
    "name": "Amumu",
    "role": "Tank",
    "difficulty": "Low",
    "history": "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction."
  },
  {
    "name": "Malphite",
    "role": "Tank",
    "difficulty": "low",
    "history": "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his progenitor, but ultimately failed. The only survivor of the destruction that followed, Malphite now endures Runeterra's soft folk and their fluid temperaments, while struggling to find a new role worthy of the last of his kind."
  },
]

```

### Filtrar por dificuldade e nome

**Requisição:**

GET /api/champions?difficulty=Moderate&name=Ashe

**Resposta:**

```json
[
  {
    "name": "Ashe",
    "role": "Marksman",
    "difficulty": "Moderate",
    "history": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands."
  }
]

```
___
### Códigos de Resposta

A API pode retornar os seguintes códigos de resposta:

``200`` OK. A requisição foi bem-sucedida.

``400`` Bad Request. A requisição possui parâmetros inválidos.

``404`` Not Found. Os recursos solicitados não foram encontrados.

``500`` Internal Server Error. Ocorreu um erro interno no servidor.
