package br.gov.sp.fatec.opendroid.dto.user;

import br.gov.sp.fatec.opendroid.enums.UserRole;

public record RegisterDTO(String email, String password, UserRole role) {
}
