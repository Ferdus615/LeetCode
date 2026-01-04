# Write your MySQL query statement below
select customer_number from Orders
group By customer_number
order by count(*) desc limit 1
