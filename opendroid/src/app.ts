import express from 'express';
import transporter from './config/email';

const app = express();
const PORT = 3000;

app.get('/forgot-password', (req, res) => {
    const email = req.query.email as string;
    const link = req.query.link as string;

    const mailOptions = {
        from: 'Opendroid',
        to: email,
        subject: 'Recuperação de Senha',
        html: `<!DOCTYPE html>
        <html lang="pt-BR">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reset Password</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #286d26;
                }
        
                .container {
                    text-align: center;
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                }
        
                .logo {
                    max-width: 200px;
                }
        
                .droid {
                    max-width: 350px;
                    margin-bottom: 20px;
                }
        
                .title {
                    color: #444;
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
        
                .description {
                    color: #666;
                    font-size: 16px;
                    margin-bottom: 20px;
                }
        
                .link {
                    background-color: #286d26;
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-weight: bold;
                    text-decoration: none;
                    display: inline-block;
                    margin-bottom: 20px;
                }
        
                .ignore,
                .support {
                    color: #666;
                    font-size: 14px;
                    font-weight: bold;
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <p>
                    <img src="cid:logo" alt="Logo" class="logo">
                </p>
                <p>
                    <img src="cid:droid" alt="droid" class="droid">
                </p>
                <h1 class="title">Esqueceu sua senha?</h1>
                <p class="description">Sem problemas, nós te ajudamos! Vamos conseguir uma nova senha para você.</p>
                <a href="${link}" class="link">REDEFINIR SENHA</a>
                <p class="ignore">Se você não solicitou a troca de senha, simplesmente ignore este e-mail.</p>
                <p class="support">Se você continuar enfrentando problemas, sinta-se à vontade para nos contatar em
                    drodroids@gmail.com.</p>
            </div>
        </body>
        
        </html>`,
        attachments: [
            {
                filename: 'logo-opendroid-vertical.png',
                path: __dirname + '/assets/logo-opendroid-vertical.png',
                cid: 'logo'
            },
            {
                filename: 'droid.png',
                path: __dirname + '/assets/droid.png',
                cid: 'droid'
            }
        ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar o email:', error);
            res.status(500).send('Erro ao enviar o email de recuperação de senha.');
        } else {
            console.log('Email enviado:', info.response);
            res.send('Email de recuperação de senha enviado com sucesso.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
