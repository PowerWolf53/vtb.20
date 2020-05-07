package by.bsuir.vtb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import by.bsuir.vtb.repository.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLoginAndPassword(String login, String password);
}