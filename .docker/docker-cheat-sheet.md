## Building an image and creating the container

http://queirozf.com/entries/angular-2-app-running-on-nginx-on-docker-a-simple-example

docker build -t roost-angular -f ./.docker/nginx.dockerfile .
docker run -p 8080:80 -dit roost-angular

docker start {id}
docker stop {id}

docker ps -a
docker images