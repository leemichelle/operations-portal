DROP DATABASE IF EXISTS operations;

CREATE DATABASE operations;

\c operations;

DROP TABLE IF EXISTS Clients;

CREATE TABLE IF NOT EXISTS Clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR
);

DROP TABLE IF EXISTS Products;

CREATE TABLE IF NOT EXISTS Products (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  color VARCHAR[],
  size VARCHAR[],
  price DECIMAL(10, 2),
  quantity INT 
);

INSERT INTO Clients (name) VALUES 
  ('Slack'), 
  ('Google'), 
  ('Facebook'), 
  ('Twitter'), 
  ('Airbnb'), 
  ('Credit Karma'), 
  ('Amazon Web Services'), 
  ('Postmates');

INSERT INTO Products (title, color, size, price, quantity) VALUES 
  ('Hydroflask', ARRAY['black', 'white', 'gray'], ARRAY['16oz', '32oz'], 30.00, 0), 
  ('Incase ICON Slim Backpack', ARRAY['black', 'olive', 'gray', 'navy'], ARRAY['19" x 12" x 8"'], 150.00, 0), 
  ('Rip van Wafels Honey and Oats Caddie', ARRAY['N/A'], ARRAY['12 ct.'], 18.00, 0), 
  ('Patagonia Torrentshell Jacket', ARRAY['black', 'gray', 'navy', 'green'], ARRAY['xs', 's', 'm', 'l', 'xl', '2xl'], 129.00, 0);