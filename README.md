
# Like Service



 
## PostMan Documentation

- checkout postman documentation for detailed Description

### [Postman](https://documenter.getpostman.com/view/20003749/2s9XxwvDcJ)


## Installation

### Prerequiste

- install docker and docker-compose

#### Inside Folder Path run :-

##### Keep port Number 3306 and 8000 free Before running this Command
```bash
 $ docker-compose up -d --build
```
```bash
 $ docker exec -it rediscontainer redis-cli
```
Run ``init.sql`` file in script to create Database and Table

`path: /dbinit/init.sql`

prerequiste docker docker compose
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`DB_HOST` 

`DB_USER` 

`DB_NAME` 

`DB_PASSWORD` 

`DB_PORT`

`PORT` 

`REDIS_URI` 

//used https://ethereal.email/create to create auth and pass

`MAIL_SENDER_AUTH `= 'email'

`MAIL_SENDER_PASS `= 'password'

## Schema

![image](https://github.com/ank-2222/likeService/assets/76547947/f227afcc-8569-4a57-9471-f08d72691825)

