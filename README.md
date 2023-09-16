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

GET: http://localhost:3000/auth

# cars:

GET: http://localhost:3000/car
GETById: http://localhost:3000/car/2
POST: http://localhost:3000/car/add
PUT: http://localhost:3000/car/update/1
DELETE: http://localhost:3000/car/delete/3
