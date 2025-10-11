-- Write your PostgreSQL query statement below
select round(count(player_id)::numeric / (select count(distinct player_id) from activity) ,2) as fraction
from activity
where (player_id, event_date) in (
    select player_id, min(event_date) + 1
    from activity
    group by player_id
)

