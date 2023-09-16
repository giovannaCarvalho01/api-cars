const carData = require('../data/carData');

exports.getCar = function(){
    return carData.getCar();
};

exports.getCarById = function(id){
    return carData.getCarById(id);
};

exports.postCar = function(car){
    return carData.postCar(car);
};

exports.updateCar = function(id, car){
    return carData.updateCar(id, car);
};

exports.delete = function(id){
    return carData.deleteCar(id);
};