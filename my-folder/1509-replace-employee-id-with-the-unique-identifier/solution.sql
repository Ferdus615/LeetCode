-- Write your PostgreSQL query statement below
select e_id.unique_id, e.name 
from Employees e 
left join  EmployeeUNI e_id
on e.id = e_id.id 
