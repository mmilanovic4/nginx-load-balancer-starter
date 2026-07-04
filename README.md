# nginx-load-balancer-starter

Nginx load-balancing traffic across multiple horizontally-scaled app
instances, all running in Docker.

## Structure

```
load-balancer/
├── docker-compose.yml   # app + nginx services
├── nginx/nginx.conf     # reverse proxy / load balancer config
└── app/                 # backend app + its Dockerfile
```

## Run it

```bash
docker compose up --build
curl http://localhost:8080
```

## Scale it

```bash
docker compose up --scale app=3 -d
```

Nginx auto-discovers new/removed instances (via Docker's internal DNS),
no config changes or restarts needed.

## Stop it

```bash
docker compose down
```
