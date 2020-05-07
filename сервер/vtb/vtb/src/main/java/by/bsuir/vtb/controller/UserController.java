package by.bsuir.vtb.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import by.bsuir.vtb.repository.model.User;
import by.bsuir.vtb.service.user.UserService;


@RestController
@RequestMapping(value = "api/vtb/user", produces = APPLICATION_JSON_VALUE)
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/all")
    public List<User> getAll(){
        return userService.getAll();
    }

    @DeleteMapping(value = "/delete/{id}")
    public void delete( @PathVariable Long id){
        userService.deleteUser(id);
    }

    @PostMapping(value = "/update")
    public void update( @RequestBody User user){
        userService.updateUser(user);
    }
}
