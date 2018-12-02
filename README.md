# Docker training

### References

* [Docker4Drupal](https://github.com/wodby/docker4drupal)
* [Local environment with Docker4Drupal](https://wodby.com/docs/stacks/drupal/local/)
* [Composer template for Drupal projects](https://github.com/drupal-composer/drupal-project)

### Steps

* Clone the repo with the Drupal Composer template
* Insert Docker4Drupal files
* Configure .env file
* Update the /etc/hosts file by domains (site, portainer, mailhog) 
* `docker-compose up -d`
* `docker exec -it drupal8_training_php bash`
* `composer create-project drupal-composer/drupal-project:8.x-dev drupal --stability dev --no-interaction`

### Tasks

* Run local environment via the Docker4Drupal
* Set up the Drupal 8 via Composer
* Run any Drush command
* Connect to a database and perform any query
* Play around with the Mailhog: reset your password on a site
* Play around with the Portainer: monitor a resource usage in a database container
* Configure the XDebug
