// kode untuk js
// const express = require('express'); //import library ecpress
// const dotenv = require('dotenv'); //import library dotenv

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
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(express.json()); //untuk mengambil data dari website bentuk json
app.use(express.urlencoded({ extended: true})); //unutk mengambil data dari webiste bentuk form 
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// unutuk membuat route users
app.get('/users', (req: Request, res: Response) => {
  res.send( ' Users');
});
//untuk membuat  fungsi post/mengirim data api
app.post('/users', (req: Request, res: Response) => {
  const email : string = req.body.email;
  const name : string = req.body.name;
  const data: object = {
    email,
    name,
  }
  res.send(data);
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});