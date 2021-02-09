CREATE DATABASE nodepsqldocker;

-- Make sure we're using our `nodepsqldocker` database
\c nodepsqldocker;

-- We can create our currencies table
CREATE TABLE IF NOT EXISTS currencies (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  symbol VARCHAR(255) NOT NULL
);

-- We can create our rates table
CREATE TABLE IF NOT EXISTS rates (
  id SERIAL PRIMARY KEY,
  id_currency INTEGER REFERENCES currencies(id),
  value REAL NOT NULL,
);

INSERT INTO currencies (description, symbol) 
VALUES 
('bitcoin', 'BTC'),
('etherum', 'ETH'),
('cardano', 'ADA');

INSERT INTO rates (id_currency, value) 
VALUES 
(1, 12155.23),
(2, 12148.56),
(3, 11457.56),
(1, 13155.23),
(2, 12168.56),
(3, 11487.56),
(1, 13155.23),
(2, 12348.56),
(3, 11557.56);