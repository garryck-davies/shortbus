create table cart(
cart_id serial primary key,
product_id INTEGER REFERENCES product(product_id),
quantity integer
)