package br.gov.sp.fatec.opendroid.repository;

import br.gov.sp.fatec.opendroid.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByPassToken(String token);
}
