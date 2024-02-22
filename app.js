// modules
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
// inserting host, port, secure and auth data
let transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 587,
    secure: false,
    auth: {
        user: 'saselmandel@yandex.ru',
        pass: 'swocsfxdbxfhpfnq'
    }
});

// construction of our mail
let mailOptions = {
    from: '"Sasel Mandel" <saselmandel@yandex.ru>',
    to: 'uakaboss@yandex.ru',
    subject: 'Hello, bro',
    text: 'Hello, friend, how are you? I am sending this message by nodemailer!',
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error);
    console.log('Your message sent: %s', info.messageId);
});