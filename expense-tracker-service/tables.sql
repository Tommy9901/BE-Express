
CREATE TABLE category(
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
)

CREATE TABLE transaction(
  amount DECIMAL(10,2),
  categoryID CHAR(36),
  type VARCHAR(10),
  date Date,
  payee VARCHAR(30),
  note TEXT
)


SELECT id, name FROM category;
SELECT * FROM category;


ALTER TABLE category 
  ADD COLUMN color varchar(16),
  ADD COLUMN icon varchar(16);


INSERT INTO playing_with_neon(name, value)
  SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM playing_with_neon;