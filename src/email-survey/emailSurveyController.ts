import express from 'express';
import { createTransport, createTestAccount, getTestMessageUrl } from 'nodemailer';
import {form1, form2, form3} from './form';
const router = express.Router();

router.post('/', async (req, res) => {
 createTestAccount((err, account) => {
  let transporter = createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
        user: account.user,
        pass: account.pass
    }
  });
  console.log(transporter);

  transporter.sendMail({
    from: account.user,
    to: 'kumarsainideepak32@gmail.com',
    subject: 'Testing email',
    // text: 'This is only a test email',
    html: form3
  }, (err, info) => {
    if(err) {
      console.log('There is an error while sending email', err);
      res.send('error');
    } else {
      console.log('Email Sent...');
      console.log(info);
      console.log(getTestMessageUrl(info))
      res.send('ok');
    }
  })
 })
});

router.post('/verify', (req, res) => {
  console.log(req);
  console.log(req.body);
  res.status(201).send('Gathered');
})

export { router };