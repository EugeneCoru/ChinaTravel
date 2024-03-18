//const express = require('express');
import express from 'express';
//const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';

const server = express();

server.use(express.static(__dirname + '/travel'));
server.use(express.json());

server.get('/', (req, res)=>{
    res.sendFile('/travel/index.html', {root: __dirname });
});

server.post("/api/feedback", async (req, res)=>{
       try {
        const transporter = nodemailer.createTransport({
            host: "smtp.mail.ru",
            secure: true,
            port: 465,
            auth: {
                user: "testprodevg@mail.ru",
                pass: "k9TCcPYVPRhLUV3g95sj"
            }
        });

        const {name, number} = req.body;
        console.log(req.body);
        await transporter.sendMail({
            from: "testprodevg@mail.ru",
            to: "testprodevg@mail.ru",
            subject: "Отправка формы",
            text: `${name} ${number} ${date}`,
        });

        return res.status(200).send({
            status: 200,
            massage: 'Успешная отправка'
        });
        
       }catch (e) {
        return res.status(500).send({
            status: 500,
            message: 'Ошибка при запросе'
        });
       }
});

server.listen(5173, ()=>{
    console.log('listening on port 5173');
});
//commonjs