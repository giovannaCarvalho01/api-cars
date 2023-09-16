CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    fabricante VARCHAR(255),
    modelo VARCHAR(255),
    descricao TEXT,
    cor VARCHAR(50),
    img VARCHAR(255)  
);