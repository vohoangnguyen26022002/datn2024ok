const nodeMailer = require('nodemailer');
const mailConfig = require('../config/mail.config');
require('dontenv/config');

exports.sendMail = (to, subject, htmlContent) =>{
    const transport = npdeMailer.createTransport({
        host: mailConfig.HOST,
        port: mailConfig.PORT,
        secure:false,
        auth: {
            user: mailConfig.USERNAME,
        pass: mailConfig.PASSWORD,        }
    })
}