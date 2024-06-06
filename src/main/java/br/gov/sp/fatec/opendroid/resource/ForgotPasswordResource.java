package br.gov.sp.fatec.opendroid.resource;

import br.gov.sp.fatec.opendroid.model.User;
import br.gov.sp.fatec.opendroid.service.UserService;
import br.gov.sp.fatec.opendroid.utils.Utility;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Controller
public class ForgotPasswordResource {
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private UserService userService;

    @GetMapping("/forgot-password")
    public String showForgotPasswordForm() {
        return "forgotPassword";
    }

    @PostMapping("/forgot-password")
    public String processForgotPassword(HttpServletRequest request, Model model) {
        String email = request.getParameter("email");
        String token = RandomStringUtils.random(30);
        try {
            userService.updateResetPasswordToken(token, email);
            String resetPasswordLink = Utility.getSiteURL(request) + "/reset-password?token=" + token;
            sendEmail(email, resetPasswordLink);
            model.addAttribute("message", "Enviamos um link para redefinir a senha para o seu e-mail. Por favor, verifique.");
        } catch (MessagingException | IOException e) {
            model.addAttribute("error", "Erro ao enviar o e-mail.");
        }
        return "forgotPassword";
    }

    public void sendEmail(String recipientEmail, String link) throws MessagingException, IOException {
        String url = "http://localhost:3000/forgot-password?email=" + recipientEmail + "&link=" + link;
        String response = restTemplate.getForObject(url, String.class);
        System.out.println("Resposta do Node.js: " + response);
    }

    @GetMapping("/reset-password")
    public String showResetPasswordForm(@Param(value = "token") String token, Model model) {
        User user = userService.getByResetPasswordToken(token);
        model.addAttribute("token", token);
        if (user == null) {
        }
        return "resetPassword";
    }

    @PostMapping("/reset-password")
    public String processResetPassword(HttpServletRequest request, Model model) {
        String token = request.getParameter("token");
        String password = request.getParameter("password");
        User user = userService.getByResetPasswordToken(token);
        model.addAttribute("title", "Resete sua senha");
        if (user == null) {
            return "resetPassword";
        } else {
            userService.updatePassword(user, password);
        }
        return "resetPassword";
    }
}
