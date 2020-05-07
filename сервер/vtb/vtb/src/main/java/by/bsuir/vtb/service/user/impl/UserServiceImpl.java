package by.bsuir.vtb.service.user.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import by.bsuir.vtb.repository.UserRepository;
import by.bsuir.vtb.repository.model.User;
import by.bsuir.vtb.service.user.UserService;

@Component
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public void deleteUser(Long id) {
        User user = userRepository.getOne(id);
        if(!user.getRole().equals("ADMIN")){
            userRepository.delete(user);
        }
    }

    @Override
    @Transactional
    public void updateUser(User user) {
        Long id = user.getId();
        User oldUser = userRepository.getOne(id);
        userRepository.delete(oldUser);
        user.setId(null);
        userRepository.save(user);
    }
}
