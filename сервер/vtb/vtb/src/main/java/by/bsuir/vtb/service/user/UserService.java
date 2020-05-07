package by.bsuir.vtb.service.user;

import java.util.List;

import by.bsuir.vtb.repository.model.User;

public interface UserService {

    List<User> getAll();

    void deleteUser(Long id);

    void updateUser(User user);
}
