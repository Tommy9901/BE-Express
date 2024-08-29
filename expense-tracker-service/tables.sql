
CREATE TABLE category(
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
)

CREATE TABLE transaction(
  amount decimal(10,2),
  categoryID char(36),
  type varchar(10),
  date Date,
  payee varchar(),
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