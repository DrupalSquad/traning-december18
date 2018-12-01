# Docker training

### Commands for this step

Build a local custom image with NGINX:
```
docker build --file Dockerfile-nginx --tag my_nginx_image .
```

Run the PHP container:
```
docker run -d --volume $(pwd):/var/www --name php-fpm php:7.1.24-fpm
```

Run the NGINX container:
```
docker run -d -p 8080:80 --volume $(pwd):/var/www --volume "$PWD"/docker/nginx/conf.d:/etc/nginx/conf.d --link php-fpm --name web_server my_nginx_image
```

### Containers info

The NGINX image on the DockerHub: [Click](https://hub.docker.com/_/nginx/).

The PHP image on the DockerHub: [Click](https://hub.docker.com/_/php/).

A path to the  *nginx.conf*: `/etc/nginx/nginx.conf`.

### Task

Deliver data from the *index.php* to a user.
