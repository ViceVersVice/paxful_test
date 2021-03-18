#!/bin/sh

# Explicit wait, so migration will be performed after DB start
sleep 5

python3 manage.py migrate
python3 manage.py loaddata db_fixtures/default_users.json
python3 manage.py loaddata db_fixtures/default_profiles.json
python3 manage.py runserver 0.0.0.0:8000

exec "$@"
