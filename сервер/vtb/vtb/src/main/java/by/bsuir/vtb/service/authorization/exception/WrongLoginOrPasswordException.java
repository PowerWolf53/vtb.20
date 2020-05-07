package by.bsuir.vtb.service.authorization.exception;

public class WrongLoginOrPasswordException extends RuntimeException {

    public WrongLoginOrPasswordException(String message){
        super(message);
    }
}
