3- docker pull debian:stable-slim
4- docker container run -it debian:stable-slim
5- cat /etc/*-release
6- exit
7- docker ps -a
8- docker start 201
9- docker exec -it 201 /bin/bash
10- cat /etc/debian_version
11- exit
12- docker rm -f 201