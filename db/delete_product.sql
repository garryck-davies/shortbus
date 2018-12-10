delete from cart
where product_id = $1;

select * from cart
join product on product.product_id = cart.product_id;