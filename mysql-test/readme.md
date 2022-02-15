# MySQL and Node

[https://www.sitepoint.com/using-node-mysql-javascript-client/](https://www.sitepoint.com/using-node-mysql-javascript-client/)

NoSQL databases are rather popular among Node developers, with MongoDB (the “M” in the MEAN stack) leading the pack. When starting a new Node project, however, you shouldn’t just accept Mongo as the default choice. Rather, the type of database you choose should depend on your project’s requirements. If, for example, you need dynamic table creation, or real-time inserts, then a NoSQL solution is the way to go. If your project deals with complex queries and transactions, on the other hand, an SQL database makes much more sense.

## Custom tools
[NodeMon](https://nodemon.io/)


## Installation

Go through tutorial on web page...

```bash
mkdir mysql-test
cd mysql-test
npm init -y
npm install mysql
npm install --save-dev nodemon

```

## How to run the app
./node_modules/.bin/nodemon app.js
