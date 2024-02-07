# DOB Initial - Backend
Recruitment process project based on NodeJS (Express, Mongoose - MongoDB Atlas)

## Installation

After cloning the repository install dependencies from main directory

```shell
pnpm install
```

## Setup

To set everything ready edit the .env file in root directory to configure application on your environment

```shell
; MongoDB URL
MONGO_URL="mongodb+srv://<user>:<password>@path-to-your.mongodb.net"
; Server host port
SERVER_PORT="1234"
```

## Usage

To start application simply run command below

```shell
pnpm start
```

Application will connect to MongoDB and start the server hosted on provided port. There should be a message in your 
terminal informing you that the server started on given address:

```shell
[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts,js
[nodemon] starting `ts-node ./src/index.ts`
Server running on http://127.0.0.1:8050
```


