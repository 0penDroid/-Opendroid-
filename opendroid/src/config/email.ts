import * as nodemailer from 'nodemailer';
const dotenv = require('dotenv');

dotenv.config();

const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;

if (!gmailUser || !gmailPass) {
    console.error('Por favor, configure corretamente suas credenciais do Gmail no arquivo .env.');
    process.exit(1);
}

// Configurações do Nodemailer para o SMTP do Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailUser,
        pass: gmailPass
    }
});

export default transporter;
