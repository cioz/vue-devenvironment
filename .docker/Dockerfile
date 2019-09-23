FROM php:7.1.8-apache



COPY . /srv/web
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /srv/web


RUN apt-get update -y && apt-get install -y libpng-dev
RUN apt-get update -y && apt-get install -y libxml++2.6-dev
RUN apt-get install -y libbz2-dev && docker-php-ext-install bz2

RUN docker-php-ext-install mbstring pdo pdo_mysql mysqli gd dom simplexml exif \
    && chown -R www-data:www-data /srv/web




