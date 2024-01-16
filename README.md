Follow this link for know how to run the application : https://tech-hour.com/nodejs-nginx-load-balancer

Follow this link for know how to run the application : https://tech-hour.com/nodejs-nginx-load-balancer

### Build the image of the server :

docker build -t server-app:1.0.0 .

### Build the image of the gateway

cd gateway
docker build -t gateway:1.0.0 .

### run the containers servers

docker container run -d -p 4001:4000 --name server-01 -e "server=one" server-app:1.0.0

docker container run -d -p 4002:4000 --name server-02 -e "server=two" server-app:1.0.0

docker container run -d -p 4003:4000 --name server-03 -e "server=three" server-app:1.0.0

### Run the container of the gateway

docker container run -p 4000:80 -d gateway:1.0.0
