-- Write your PostgreSQL query statement below
(select u.name as results
from Users u
left join MovieRating r
    on u.user_id = r.user_id
group by u.name
order by count(r.movie_id) DESC, u.name ASC
limit 1)

union all

(select m.title as results
from Movies m
join MovieRating r
    on r.movie_id = m.movie_id
where r.created_at >= '2020-02-01' 
    and r.created_at < '2020-03-01'
group by m.title
order by avg(r.rating) DESC, m.title ASC
limit 1)
