"use strict";
// kode untuk js
// const express = require('express'); //import library ecpress
// const dotenv = require('dotenv'); //import library dotenv
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config(); //membuat inisial config
// const app = express(); //pemanggilan express
// const port = process.env.PORT;
// app.get('/', (req, res) => {
//   res.send('Express + TypeScript Server'); //mengirimkan respon ke web
// });
// //membuat route 
// app.get('/users', (req, res) => {
//   res.send('Ini adalah halaman users');
// })
// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
//kode untuk ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json()); //untuk mengambil data dari website bentuk json
app.use(express_1.default.urlencoded({ extended: true })); //unutk mengambil data dari webiste bentuk form 
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
// unutuk membuat route users
app.get('/users', (req, res) => {
    res.send(' Users');
});
//untuk membuat  fungsi post/mengirim data api
app.post('/users', (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const data = {
        email,
        name,
    };
    res.send(data);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
