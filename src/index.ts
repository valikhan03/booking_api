import express from "express";
import { createConnection, ConnectionManager, getConnectionManager } from "typeorm";
import * as dotenv from "dotenv";

const app:express.Application = express();

const conn_manager = getConnectionManager();

const connection =  conn_manager.create({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

connection.connect()

app.listen(3000, () => {
    console.log("Server started working...");
});