package br.gov.sp.fatec.opendroid.dto.user;

import br.gov.sp.fatec.opendroid.enums.UserRole;
import br.gov.sp.fatec.opendroid.model.User;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserDTO {

    private Long id;
    private String email;
    private String password;
    private UserRole role;

    public UserDTO(User user) {
        id = user.getId();
        email = user.getEmail();
        password = user.getPassword();
        role = user.getRole();
    }

    public static List<UserDTO> converter(List<User> users) {
        return users.stream().map(UserDTO::new).collect(Collectors.toList());
    }
}
