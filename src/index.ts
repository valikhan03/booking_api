import express from "express";


const app:express.Application = express();



app.listen(3000, () => {
    console.log("Server started working...");
})