package by.bsuir.vtb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import by.bsuir.vtb.repository.model.User;
import by.bsuir.vtb.service.registration.RegistrationService;

@Component
@Order(1)
public class AppRunner implements ApplicationRunner {

    @Autowired
    private RegistrationService registrationService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        User user = User.builder()
                .login("admin@mail.ru")
                .password("adminadmin")
                .cardNumber("1234-1234-1234-1234")
                .name("Ян")
                .surname("Прудников")
                .patronymic("Игоревич")
                .passportNumber("BM2345426")
                .role("ADMIN")
                .build();

        registrationService.signUp(user);
        System.out.println("Admin created");
    }
}
