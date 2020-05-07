package by.bsuir.vtb.service.authorization.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthenticationData {

    private String role;
}
