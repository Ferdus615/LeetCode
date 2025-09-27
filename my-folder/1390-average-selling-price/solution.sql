-- Write your PostgreSQL query statement below
select p.product_id, coalesce(round(sum(price * units) * 1.0 / nullif(sum(units), 0),2), 0) 
as average_price
from Prices p left join UnitsSold u
on p.product_id = u.product_id and u.purchase_date between p.start_date and p.end_date
group by p.product_id
