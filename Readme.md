# Steplix Challenge

## Instrucciones

- Clonar el repo

- Ejecutar docker-compose build (hay 2 servicios, uno es de la app y otro de db. Ademas se ejecutan todos los proceso detallados en el Dockerfile)

- Luego una vez generados los containers ejecutar docker-compose up (se activan los 2 containers)

- Y a esta altura la api corre en http://localhost:5000

- Cargar currency haciendo un post a http://localhost:5000/currencies de esta manera:

{
"description": "bitcoin",
"symbol": "BTC"
}

{
"description": "etherum",
"symbol": "ETH"
}

{
"description": "cardano",
"symbol": "ADA"
}

- Cargar rate haciendo un post a http://localhost:5000/rates de esta manera:

{
"id_currency": 1,
"value": 11934.231233
}

{
"id_currency": 2,
"value": 0.0990881
}

{
"id_currency": 3,
"value": 11934.231233
}

- Todas estas rutas estan disponibles:

  - GET localhost:5000/currencies

  - GET localhost:5000/rates

  - GET localhost:5000/rates/{symbol}

  - POST localhost:5000/currencies

  - POST localhost:5000/rates
