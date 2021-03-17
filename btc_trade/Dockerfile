# Alpine base image that contains python 3.7
FROM python:3.9-alpine

WORKDIR /srv/dir
COPY requirements.txt .
COPY . .

# Install system dependencies
# Install pip dependencies in the same layer
RUN apk add bash build-base gcc postgresql-dev --update nodejs npm && \
    pip install pip-tools==5.2.1 && \
    pip install -r requirements.txt

RUN npm run build

RUN chmod +x entrypoint.sh
ENTRYPOINT ["/srv/dir/entrypoint.sh"]

