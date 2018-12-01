# Docker training

### Commands for this step

Run an environment:
```
docker-compose up -d --build
```

Restart containers:
```
docker-compose restart
```

Stop containers and remove images:
```
docker-compose down --rmi all
```

### Containers info

The NGINX image on the DockerHub: [Click](https://hub.docker.com/_/nginx/).

The PHP image on the DockerHub: [Click](https://hub.docker.com/_/php/).

A path to the  *nginx.conf*: `/etc/nginx/nginx.conf`.

### Task

Deliver data from the *index.php* to a user.
