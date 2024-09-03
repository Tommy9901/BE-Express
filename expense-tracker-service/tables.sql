
CREATE TABLE category(
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
)

CREATE TYPE transactionType AS ENUM ('INCOME', 'EXPENSE');
CREATE TABLE transaction(
  id char(36) PRIMARY KEY,
  amount DECIMAL(10,2),
  categoryID CHAR(36),
  type transactionType,
  date Date,
  payee VARCHAR(36),
  note TEXT,
  FOREIGN KEY (categoryID) REFERENCES category(id)
)
-- INSERT into transaction values(....., ...., ..., ..., )

-- delete tableeee
DROP TABLE transaction;
-- 



--left joinnnnn
SELECT transaction.amount, transaction.type, category.name, category.icon 
FROM transaction LEFT JOIN category 
on transaction.categoryID = category.id

SELECT id, name FROM category;
SELECT * FROM category;


ALTER TABLE category 
  ADD COLUMN color varchar(16),
  ADD COLUMN icon varchar(16);


INSERT INTO playing_with_neon(name, value)
  SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM playing_with_neon;