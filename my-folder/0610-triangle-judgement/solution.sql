-- Write your PostgreSQL query statement below
select x, y, z, (case
    when (x + y + z) - greatest(x, y ,z) > greatest(x, y, z)
    then 'Yes'
    else 'No' end
) as triangle 
from Triangle
