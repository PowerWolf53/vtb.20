package by.bsuir.vtb.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import by.bsuir.vtb.repository.model.User;
import by.bsuir.vtb.service.authorization.AuthorizationService;
import by.bsuir.vtb.service.authorization.model.AuthenticationData;
import by.bsuir.vtb.service.authorization.model.SignInDto;
import by.bsuir.vtb.service.registration.RegistrationService;

@RestController
@RequestMapping(value = "api/vtb/auth", produces = APPLICATION_JSON_VALUE)
public class AuthenticationController {

    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private AuthorizationService  authorizationService;

    @PostMapping(value = "/sign_up")
    public void signUp(@RequestBody User user){
        registrationService.signUp(user);
    }

    @PostMapping(value = "/sign_in")
    public AuthenticationData signIn(@RequestBody SignInDto dto){
        return authorizationService.signIn(dto);
    }


}
