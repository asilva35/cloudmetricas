export default function handler(req, res) {
  //VERIFY RECAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const token = req.body.token;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  try {
    fetch(verificationUrl, {
      method: 'POST',
    })
      .then((reCaptchaRes) => reCaptchaRes.json())
      .then((reCaptchaRes) => {
        //IF RECAPTCHA VERIFICATION SUCCESSFUL
        if (reCaptchaRes?.score > 0.5) {
          let nodemailer = require('nodemailer');
          const transporter = nodemailer.createTransport({
            host: process.env.NODEMAILER_HOST,
            port: process.env.NODEMAILER_PORT,
            secure: true,
            auth: {
              user: process.env.NODEMAILER_USER,
              pass: process.env.NODEMAILER_PASSWORD,
            },
          });

          const mailData = {
            from: 'CloudMetricas Site <cloudmetricas@sistev.co>',
            to: 'sistev.contacto@gmail.com',
            subject: `Message From ${req.body.fullName}`,
            text: `Name: ${req.body.fullName}\n\n | Email: ${
              req.body.email
            }\n\n | Company: ${req.body.company}\n\n | Position: ${
              req.body.position
            }\n\n | Message: ${
              req.body.message
            }\n\nEstoy interesado en: Capacitación (${
              req.body.services_capacitacion ? 'si' : 'no'
            }) ,Soporte (${
              req.body.services_soporte ? 'si' : 'no'
            }), Consultoria (${
              req.body.services_consultoria ? 'si' : 'no'
            }),  Webinar (${req.body.services_webinar ? 'si' : 'no'}), Otro (${
              req.body.services_otro ? 'si' : 'no'
            })`,
            html: `<div>Name: ${req.body.fullName}\n\n<br/>Email: ${
              req.body.email
            }\n\n<br/>Company: ${req.body.company}\n\n<br/>Position: ${
              req.body.position
            }\n\n<br/>Message: ${
              req.body.message
            }\n\n<br/>Estoy interesado en:<br/> Capacitación (${
              req.body.services_capacitacion ? 'si' : 'no'
            }) , Soporte (${
              req.body.services_soporte ? 'si' : 'no'
            }), Consultoria (${
              req.body.services_consultoria ? 'si' : 'no'
            }),  Webinar (${req.body.services_webinar ? 'si' : 'no'}), Otro (${
              req.body.services_otro ? 'si' : 'no'
            }) </div>`,
          };

          transporter.sendMail(mailData, function (err, info) {
            if (err)
              res.status(500).json({
                message: 'Sorry, message not sent, please try again later',
                err,
              });
            else res.status(200).json({ message: 'Message sent successfully' });
          });
        }
        //IF RECAPTCHA VERIFICATION UNSUCCESSFUL
        else {
          return res
            .status(500)
            .json({ message: 'Failed captcha verification' });
        }
      });
  } catch (err) {
    res.status(500).json({
      message: 'Sorry, message not sent, please try in a few minutes',
      err,
    });
  }
}
