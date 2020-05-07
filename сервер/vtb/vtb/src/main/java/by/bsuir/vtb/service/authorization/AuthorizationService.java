package by.bsuir.vtb.service.authorization;

import by.bsuir.vtb.repository.model.User;
import by.bsuir.vtb.service.authorization.model.AuthenticationData;
import by.bsuir.vtb.service.authorization.model.SignInDto;

public interface AuthorizationService {

    AuthenticationData signIn(SignInDto dto);
}
