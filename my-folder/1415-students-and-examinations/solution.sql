-- Write your PostgreSQL query statement below
select s.student_id, s.student_name, c.subject_name, count(e.subject_name) as attended_exams 
from students s
cross join subjects c 
left join examinations e 
    on s.student_id = e.student_id 
        and c.subject_name = e.subject_name
group by s.student_id, s.student_name, c.subject_name 
order by s.student_id, c.subject_name
