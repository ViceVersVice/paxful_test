FROM python:3.9-alpine

WORKDIR /srv/dir
COPY requirements.txt .
COPY . .

RUN apk add bash build-base gcc postgresql-dev --update nodejs npm && \
    pip install -r requirements.txt

RUN npm run build

RUN chmod +x entrypoint.sh
ENTRYPOINT ["/srv/dir/entrypoint.sh"]

