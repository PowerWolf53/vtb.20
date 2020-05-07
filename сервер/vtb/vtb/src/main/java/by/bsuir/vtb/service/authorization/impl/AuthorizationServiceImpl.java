package by.bsuir.vtb.service.authorization.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import by.bsuir.vtb.repository.UserRepository;
import by.bsuir.vtb.repository.model.User;
import by.bsuir.vtb.service.authorization.AuthorizationService;
import by.bsuir.vtb.service.authorization.exception.WrongLoginOrPasswordException;
import by.bsuir.vtb.service.authorization.model.AuthenticationData;
import by.bsuir.vtb.service.authorization.model.SignInDto;

@Service
public class AuthorizationServiceImpl implements AuthorizationService {

    @Autowired
    UserRepository userRepository;
    @Override
    public AuthenticationData signIn(SignInDto dto) {
        Optional<User> user = userRepository.findByLoginAndPassword(dto.getLogin(), dto.getPassword());
        if(user.isPresent()){
            return AuthenticationData.builder().role(user.get().getRole()).build();
        }else{
            throw new WrongLoginOrPasswordException("Пользователя с такими данными не сущетсвует");
        }
    }
}
