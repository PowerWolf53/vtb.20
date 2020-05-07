package by.bsuir.vtb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import by.bsuir.vtb.repository.model.User;
import by.bsuir.vtb.service.registration.RegistrationService;

@SpringBootApplication
@ComponentScan(basePackages="by.bsuir.vtb")
public class VtbApplication {

	@Autowired
	private RegistrationService registrationService;

	public static void main(String[] args) {
		SpringApplication.run(VtbApplication.class, args);

	}

	private  void createAdmin(){
		User user = User.builder()
				.login("admin")
				.password("admin")
				.cardNumber("1234-1234-1234-1234")
				.name("Ян")
				.surname("Прудников")
				.patronymic("Игоревич")
				.passportNumber("BM2345426")
				.build();

		registrationService.signUp(user);
	}

}
