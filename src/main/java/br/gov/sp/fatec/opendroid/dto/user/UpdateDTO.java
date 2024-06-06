package br.gov.sp.fatec.opendroid.dto.user;

import br.gov.sp.fatec.opendroid.enums.UserRole;
import br.gov.sp.fatec.opendroid.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UpdateDTO {

    private String email;
    private String password;
    private UserRole role;

    public void update(User user) {
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);
    }
}
