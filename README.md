# api-cars

Para utilizar esse código, é necessário criar um arquivo .env com todos os dados de conexão com o seu banco de dados, conforme exemplo abaixo:

DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
JWT_SECRET=

End-points:

Todos os métodos POST, PUT e DELETE devem ser autenticados com o token para serem usados.

# Auth:

GET: https://api-cars-bsh6.onrender.com/auth

# cars:

GET: https://api-cars-bsh6.onrender.com/car
GETById: https://api-cars-bsh6.onrender.com/car/2
POST: https://api-cars-bsh6.onrender.com/car/add
PUT: https://api-cars-bsh6.onrender.com/car/update/1
DELETE: https://api-cars-bsh6.onrender.com/car/delete/3
