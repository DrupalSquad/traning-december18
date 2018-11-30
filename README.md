# Docker training

### Basic commands

Run a container:
```
docker run -d -p 8080:80 --name web_server nginx:1.14.1
```

List of "daemon" containers:
```
docker ps
```

List of all containers:
```
docker ps -a
```

Stop a container:
```
docker stop <ID_or_NAME>
```

Remove a container:
```
docker rm <ID_or_NAME>
```

List of images:
```
docker images
```

Remove an image:
```
docker rmi <ID_or_NAME>
```

Connect to a container:
```
docker exec -it <ID_or_NAME> /bin/bash
```

### NGINX help

The NGINX image on the DockerHub: [Click](https://hub.docker.com/_/nginx/).

A path to the  *nginx.conf*: `/etc/nginx/nginx.conf`.

### Task

Deliver the *index.html* from this repo to a user via the NGINX container.
