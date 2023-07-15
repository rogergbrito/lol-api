# API League of Legends

Esta API permite que você obtenha informações sobre os campeões do jogo, filtrando-os por função (role), dificuldade (difficulty) e nome (name). Através do endpoint fornecido abaixo.

## Endpoint

https://lol-api-six.vercel.app/api/champions

### Você pode utilizar os seguintes parâmetros de consulta para filtrar os resultados:

- `role`: Filtra os campeões de acordo com a função desejada. Os valores válidos são: "Fighter", "Mage", "Assassin", "Marksman", "Tank" e "Support".
- `difficulty`: Filtra os campeões com base na dificuldade desejada. Os valores válidos são: "Low", "Moderate" e "High".
- `name`: Filtra os campeões pelo nome inserido na query.

### Também pode combinar esses parâmetros para obter resultados mais específicos. Por exemplo:

- `/api/champions?role=Fighter&difficulty=Low`: Retorna os campeões da função lutador com dificuldade baixa.
- `/api/champions?difficulty=Moderate&name=Ahri`: Retorna os campeões com dificuldade moderada e cujo nome contenha "Ahri".

### E se preferir, pode buscar um campeão específico apenas passando seu id:

https://lol-api-six.vercel.app/api/champions/64aec9d9e9f9a61bcfb51fe7

## Exemplos de Uso

### Obter todos os campeões

**Requisição:**

GET https://lol-api-six.vercel.app/api/champions

**Resposta:**

```json
[
  {
    "_id": "string",
    "name": "string",
    "role": "string",
    "difficulty": "string",
    "history": "string",
    "__v": 0
  },
  {
    "_id": "string",
    "name": "string",
    "role": "string",
    "difficulty": "string",
    "history": "string",
    "__v": 0
  }
  "+++"
]
```

### Obter campeão por id

**Requisição:**

GET https://lol-api-six.vercel.app/api/champions/64aec9d9e9f9a61bcfb51fe7

**Resposta:**

```json
  {
    "_id": "64aec9d9e9f9a61bcfb51fe7",
    "name": "Ashe",
    "role": "Marksman",
    "difficulty": "Moderate",
    "history": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
    "__v": 0
  }

```


### Filtrar por função

**Requisição:**

GET https://lol-api-six.vercel.app/api/champions?role=Tank

**Resposta:**

```json

[
  {
    "_id": "64aec950e9f9a61bcfb51fdd",
    "name": "Alistar",
    "role": "Tank",
    "difficulty": "Moderate",
    "history": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
    "__v": 0
  },
  {
    "_id": "64aec963e9f9a61bcfb51fdf",
    "name": "Amumu",
    "role": "Tank",
    "difficulty": "Low",
    "history": "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.",
    "__v": 0
  }
  "+++"
]

```

### Filtrar por dificuldade e nome

**Requisição:**

GET https://lol-api-six.vercel.app/api/champions?difficulty=Moderate&name=Ashe

**Resposta:**

```json
[
  {
    "_id": "64aec9d9e9f9a61bcfb51fe7",
    "name": "Ashe",
    "role": "Marksman",
    "difficulty": "Moderate",
    "history": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
    "__v": 0
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
