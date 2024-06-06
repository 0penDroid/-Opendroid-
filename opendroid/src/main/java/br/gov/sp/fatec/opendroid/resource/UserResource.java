package br.gov.sp.fatec.opendroid.resource;

import br.gov.sp.fatec.opendroid.dto.user.UpdateDTO;
import br.gov.sp.fatec.opendroid.dto.user.UserDTO;
import br.gov.sp.fatec.opendroid.dto.user.UserFormDTO;
import br.gov.sp.fatec.opendroid.model.User;
import br.gov.sp.fatec.opendroid.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Users", description = "Users end-points")
@RestController
@RequestMapping("/user")
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    @Operation(summary = "Retrieve all users")
    @GetMapping("/findAll")
    public List<UserDTO> findAll() {
        List<User> users = userRepository.findAll();
        return UserDTO.converter(users);
    }

    @Operation(summary = "Retrieve a user by id")
    @GetMapping("/find/{id}")
    public ResponseEntity<?> findUser(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok().body(user);
        }
        return null;
    }

    @Operation(summary = "Insert a new user")
    @Transactional
    @PostMapping("/insert")
    public UserDTO saveUser(@RequestBody UserFormDTO form) {
        User user = form.converter();
        final Optional<UserDetails> optUser = Optional.ofNullable(userRepository.findByEmail(user.getEmail()));
        if (optUser.isEmpty()) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            String encodedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
            userRepository.save(user);
            return new UserDTO(user);
        }
        return null;
    }

    @Operation(summary = "Update a user by id")
    @Transactional
    @PutMapping("/update/{id}")
    public UserDTO updateuser(@PathVariable Long id, @RequestBody UpdateDTO form) {
        final Optional<User> optUser = userRepository.findById(id);
        if (optUser.isPresent()) {
            User user = optUser.get();
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            String encodedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
            form.update(user);
            userRepository.save(user);
            return new UserDTO(user);
        }
        return null;
    }

    @Operation(summary = "Delete a user by id")
    @Transactional
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        final Optional<User> optUser = userRepository.findById(id);
        if (optUser.isPresent()) {
            userRepository.deleteById(id);
        }
    }
}
