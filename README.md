# Docker training

### References

* [Docker4Drupal](https://github.com/wodby/docker4drupal)
* [Local environment with Docker4Drupal](https://wodby.com/docs/stacks/drupal/local/)
* [Composer template for Drupal projects](https://github.com/drupal-composer/drupal-project)

### Steps

* Clone the repo with the Drupal Composer template
* Insert Docker4Drupal files
* `docker-compose up -d`
* `docker exec -it drupal8_training_php bash`
* `composer create-project drupal-composer/drupal-project:8.x-dev drupal --stability dev --no-interaction`
