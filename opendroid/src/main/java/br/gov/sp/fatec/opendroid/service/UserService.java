package br.gov.sp.fatec.opendroid.service;

import br.gov.sp.fatec.opendroid.model.User;
import br.gov.sp.fatec.opendroid.repository.PassRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {

    @Autowired
    private PassRepository passRepository;


    public void updateResetPasswordToken(String token, String email) {
        User user = passRepository.findByEmail(email);
        if (user != null) {
            user.setPassToken(token);
            passRepository.save(user);
        }
    }

    public User getByResetPasswordToken(String token) {
        return passRepository.findByPassToken(token);
    }

    public void updatePassword(User user, String newPassword) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);
        user.setPassToken(null);
        passRepository.save(user);
    }
}
