#!/bin/sh

# Explicit wait, so migration will be performed after DB start
sleep 5

#python3 btc_trade/manage.py collectstatic --no-input --clear
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000

exec "$@"
