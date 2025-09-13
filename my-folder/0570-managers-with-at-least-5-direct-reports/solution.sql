-- Write your PostgreSQL query statement below
select e.name
from Employee e
left join Employee m
on e.id = m.managerID
group by e.name, m.managerID
having count(m.managerID) >= 5;
