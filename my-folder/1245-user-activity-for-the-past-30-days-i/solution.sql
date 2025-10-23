SELECT 
    activity_date AS day,
    COUNT(DISTINCT user_id) AS active_users
FROM activity
WHERE 
    activity_date >= DATE '2019-07-27' - INTERVAL '29 days'
    AND activity_date <= DATE '2019-07-27'
    AND activity_type IS NOT NULL
GROUP BY activity_date
ORDER BY activity_date;

