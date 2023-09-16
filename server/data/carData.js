const database = require('../connections/database');

exports.getCar = function (){
    return database.query('SELECT * from cars');
};

exports.getCarById = function (id) {
    return database.query('SELECT * from cars WHERE id=$1', [id]);
};

exports.postCar = function(car){
    return database.query('INSERT INTO cars (fabricante, modelo, descricao, cor, img) values($1, $2, $3, $4, $5) returning *', 
    [car.fabricante, car.modelo, car.descricao, car.cor, car.img]);
}

exports.updateCar = function(id, car){
    return database.query('UPDATE cars SET fabricante=$1, modelo=$2, descricao=$3, cor=$4, img=$5 WHERE id=$6;',
    [car.fabricante, car.modelo, car.descricao, car.cor, car.img, id]);
};

exports.deleteCar = function(id){
    return database.query("DELETE FROM cars WHERE id=$1;", [id]);
};