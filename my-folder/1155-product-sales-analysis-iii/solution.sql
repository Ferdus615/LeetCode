-- Write your PostgreSQL query statement below
select s.product_id, s.year as first_year, quantity, price
from sales s
where s.year = (
    select min(year)
    from sales
    where product_id = s.product_id
)
