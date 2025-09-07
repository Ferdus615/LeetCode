-- Write your PostgreSQL query statement below
select w1.id
from Weather w1 inner join Weather w2
on w1.recorddate = w2.recorddate + interval '1 day'
and w1.temperature  > w2.temperature 
