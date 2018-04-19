DROP DATABASE IF EXISTS fakamazon_DB;

CREATE DATABASE fakamazon_DB;

USE fakamazon_DB;

CREATE TABLE products
(
    id_item INT NOT NULL
    auto_increment,
    product_name VARCHAR
    (100) NOT NULL,
    department_name VARCHAR
    (50) NOT NULL,
    price DECIMAL
    (8, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY
    (id_item)
);



    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ('Bedazzled Cone of Shame', 'Pet Care', 100.00, 15),
        ('Dog Bytes', 'Pet Food', 10.01, 100),
        ('Stilleto Honey', 'Womens Shoes', 250.33, 3),
        ('MurderDress in Red', 'Womens Clothing', 431.11, 1),
        ('Bae Grae Hoodae', 'Mens Clothing', 50.00, 700),
        ('High Life HiTop', 'Mens Shoes', 60.00, 5000),
        ('U B Groot Onesie', 'Baby Clothing', 14.99, 24),
        ('Bombed', 'Movie Deals', 0.15, 10000),
        ('Whitwashed Classic', 'Award Winning Movies', 29.99, 888),
        ('Laughtrack Serial', 'Comedy Shows', 30.00, 20);