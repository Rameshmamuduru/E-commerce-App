CREATE DATABASE shopdb;USE shopdb;
CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(100),price INT,image VARCHAR(255));
CREATE TABLE orders(id INT AUTO_INCREMENT PRIMARY KEY,product_id INT,quantity INT,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
INSERT INTO products(name,price,image) VALUES
('iPhone 15',80000,'img1'),('Samsung S23',70000,'img2'),('MacBook Air',110000,'img3');