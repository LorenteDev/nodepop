# Nodepop

Práctica para el módulo de Desarrollo Backend con Node.js en el bootcamp de desarrollo Web Full Stack de KeepCoding.


## Instalar las dependencias

    npm install

## Iniciar el proyecto

    npm run start

## Iniciar en modo desarrollo

    npm run dev


# REST API

Api de Nodepop

## Lista de productos

### Request

`GET /api/products/`

    http://localhost:3000/api/products/


Se puede filtrar, limitar y ordenar por distintos factores.

    http://localhost:3000/api/products?tag=mobile&selling=true&price=50-1000&start=0&limit=3&sort=price

### Filtros

* name
* selling
* price
* tag

### Paginación

* start
* limit

### Ordenación

* sort

### Response

    [
        {
            "tags": [
                "mobile",
                "lifestyle"
            ],
            "_id": "601edb5ff04a3559a4125af1",
            "name": "Google Pixel 4a",
            "selling": true,
            "price": 346,
            "image": "google_pixel",
            "__v": 0
        },
        {
            "tags": [
                "mobile",
                "lifestyle"
            ],
            "_id": "601edb5ff04a3559a4125af0",
            "name": "Samsung Galaxy S21",
            "selling": true,
            "price": 859,
            "image": "galaxy_s21",
            "__v": 0
        }
    ]

## Crear un producto

### Request

`POST /api/products/`

    http://localhost:3000/api/products/

`x-www-form-urlencoded`

    name:Google Pixel 4a
    selling:true
    price:346
    image:google_pixel
    tags:mobile
    tags:lifestyle


### Response

    {
        "tags": [
            "mobile",
            "lifestyle"
        ],
        "_id": "601e9d75d94c2b07a05dd7f0",
        "name": "Google Pixel 4a",
        "selling": true,
        "price": 346,
        "image": "google_pixel",
        "__v": 0
    }

## Lista de tags

### Request

`GET /api/products/tags`

    http://localhost:3000/api/products/tags

### Response

    {
        "tags": [
            "lifestyle",
            "mobile",
            "motor",
            "work"
        ]
    }


# Front-end

Tiene el mismo funcionamiento que la API de lista de productos, solo que representada en el navegador.

`http://localhost:3000/products`

`http://localhost:3000/products?tag=mobile&selling=true&price=50-1000&start=0&limit=3&sort=price`