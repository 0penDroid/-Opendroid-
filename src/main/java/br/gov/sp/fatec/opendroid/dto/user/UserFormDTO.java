package br.gov.sp.fatec.opendroid.dto.user;

import br.gov.sp.fatec.opendroid.enums.UserRole;
import br.gov.sp.fatec.opendroid.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserFormDTO {

    private Long id;
    private String email;
    private String password;
    private UserRole role;

    public User converter() {
        User user = new User();
        user.setId(id);
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);
        return user;
    }
}
