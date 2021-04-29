// Customers table
`CREATE TABLE customers (
  id VARCHAR(50) PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50) NOT NULL,
  password TEXT NOT NULL,
  created DATE NOT NULL
);` // Orders table
`CREATE TABLE orders (
  order_number INT PRIMARY KEY,
  order_date DATE NOT NULL,
  total BIGINT NOT NULL,
  customer_id VARCHAR(50) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);` // Products Table
`CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description: TEXT NOT NULL,
  price BIGINT NOT NULL,
  image VARCHAR(200) NOT NULL
);` // Order Items Join Table
`CREATE TABLE orderitems (
  quantity INT NOT NULL,
  order_number INT NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY (order_number) REFERENCES orders(order_number),
  FOREIGN KEY (product_id) REFERENCES products(id),
  PRIMARY KEY(order_number, product_id)
);`;
