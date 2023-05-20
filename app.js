const express = require('express');
const path = require('path');
const app = express();
app.use(express.static("./public"));

app.listen(3000 , () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req , res) => {
    res.sendFile(path.join(__dirname , "/views/home.html"));
});

app.get("/register.html", (req , res) => {
    res.sendFile(path.join(__dirname , "/views/register.html"));
});

app.get("/login.html", (req , res) => {
    res.sendFile(path.join(__dirname , "/views/login.html"));
});
