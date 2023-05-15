FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y curl 
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -E -
RUN apt install -y nodejs 
WORKDIR /home
COPY . batch
COPY ./run.sh ./run.sh
WORKDIR /home/batch 
COPY ./.env ./.env
RUN npm i  
RUN npm run build
WORKDIR /home