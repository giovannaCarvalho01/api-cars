# api-cars

Para utilizar esse código, é necessário criar um arquivo .env com todos os dados de conexão com o seu banco de dados, conforme exemplo abaixo:

DB_USER=

DB_PASSWORD=

DB_HOST=

DB_NAME=

JWT_SECRET=

# Métodos

Todos os métodos POST, PUT e DELETE devem ser autenticados com o token no header da requisição (key: x-access-token) para serem usados. Recomendo uso do Postman ou software semelhante.

# Auth:

GET: https://api-cars-bsh6.onrender.com/auth

# Endpoints:

-GET: https://api-cars-bsh6.onrender.com/car

-GETById: https://api-cars-bsh6.onrender.com/car/{int:id} (informe o ID que deseja buscar)

-POST: https://api-cars-bsh6.onrender.com/car/add (Informe no Body as informações para inclusão de um novo registro, conforme json abaixo).

    Exemplo:
        {
            "id": 4,
            "fabricante": "Toyota",
            "modelo": "SW4",
            "descricao": "Um carro sedan confiável",
            "cor": "Vermelho",
            "img": ""
        }

-PUT: https://api-cars-bsh6.onrender.com/car/update/{int:id} (informe o ID que deseja atualizar e passe no body as informações para atualização)

    Exemplo:
        {
            "id": 4,
            "fabricante": "Toyota",
            "modelo": "SW4",
            "descricao": "Um carro sedan confiável",
            "cor": "Vermelho",
            "img": ""
        }

-DELETE: https://api-cars-bsh6.onrender.com/car/delete/{int:id} (informe o ID que deseja deletar)
