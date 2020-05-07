package by.bsuir.vtb.service.registration.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import by.bsuir.vtb.repository.UserRepository;
import by.bsuir.vtb.repository.model.User;
import by.bsuir.vtb.service.registration.RegistrationService;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public void signUp(User user) {
        if(user.getRole() == null){
            user.setRole("USER");
        }
        userRepository.save(user);
    }
}
