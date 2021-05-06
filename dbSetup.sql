CREATE TABLE customers (
  id VARCHAR(50) PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50) NOT NULL,
  password TEXT NOT NULL,
  created DATE NOT NULL
);

CREATE TABLE orders (
  order_number INT PRIMARY KEY,
  order_date DATE NOT NULL,
  total BIGINT NOT NULL,
  customer_id VARCHAR(50) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  price BIGINT NOT NULL,
  image VARCHAR(200) NOT NULL
);

CREATE TABLE orderitems (
  quantity INT NOT NULL,
  order_number INT NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY (order_number) REFERENCES orders(order_number),
  FOREIGN KEY (product_id) REFERENCES products(id),
  PRIMARY KEY(order_number, product_id)
);

INSERT INTO products (id, name, description, price, image)
VALUES (1, 'Basilisk', 'Reptile reputed to be a serpent king. Can cause death with a single glance.', 650, 'basilisk.png'),
(2, 'Centaur', 'Upper body of a human and the lower body of a horse. Natural intelligence. Mainly found in Greece and the surrounding regions but also spotted in Russia and as far away as India.', 1000, 'centaur.png'),
(3, 'Cerberus', 'Multi-headed dog. Most renowned for guarding the gates of the Underworld. Good at guarding other things too.', 550, 'cerberus.png'),
(4, 'Chimera', 'A lion, with the head of a goat protruding from its back, and a tail that ends with a snake''s head. Difficult to handle without previous experience.', 100, 'chimera.jpeg'),
(5, 'Cyclops', 'One eyed creatures. Enormous strength. Good at building walls.', 500, 'cyclops.jpeg'),
(6, 'Dragon', 'Legendary flying lizard. Many varieties have the ability to breath fire. European dragons are thicker than their Asian cousins.', 2000, 'dragon.jpeg'),
(7, 'Fairy', 'Small creature who usually uses their magical powers for benevolent means. Fond of hawthorn trees, foxglove, and groundsel.', 100, 'fairy.png'),
(8, 'Ghost', 'Soul or spirit of a departed human or animal. Countless varieties to choose from.', 150, 'ghost.jpeg'),
(9, 'Gnome', 'Usually lives underground. Can be used for household chores or gardenwork.', 90, 'gnome.jpeg'),
(10, 'Griffin', 'The body, tail, and back legs of a lion; the head and wings of an eagle; and sometimes an eagle''s talons as its front feet. Vicious when threatened.', 200, 'griffin.jpeg'),
(11, 'Hydra', 'Possesses poisonous breath and blood so virulent that even its scent was deadly. For every head chopped off, it will regrow two heads.', 800, 'hydra.jpeg'),
(12, 'Imp', 'Small creature. Noted for being troublesome and mischievous.', 70, 'imp.jpeg'),
(13, 'Kraken', 'Gigantic sea monster. Often found in the Arctic and north Atlantic Oceans.', 1200, 'kraken.png'),
(14, 'Loch Ness Monster', 'Large aquatic animal. Of extreme rarity.', 2500, 'nessie.jpeg'),
(15, 'Minotaur', 'Part man and part bull. Good fighter with above average fighting endurance.', 400, 'minotaur.jpeg'),
(16, 'Pegasus', 'Flying horse. Will cater to all your transportation needs.', 400, 'pegasus.jpeg'),
(17, 'Phoenix', 'Golden bird with the ability to regenerate. Reproduces by emerging from the ashes of its predecessor.', 1500, 'phoenix.jpeg'),
(18, 'Sprite', 'Ethereal entity. Found in large numbers in woodland and possesses slight magical powers.', 50, 'sprite.jpeg'),
(19, 'Troll', 'Ugly and slow witted. Of large size and dwell in isolated rocks, mountains, or caves.', 300, 'troll.png'),
(20, 'Unicorn', 'Horse like creature with a spiralised horn on its head. The horn is said to make poisoned water potable and cure many illnesses.', 900, 'unicorn.jpeg');