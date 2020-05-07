import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {Router} from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class SignUpFormComponent implements OnInit {

  @Output() registrationComplete = new EventEmitter<boolean>();
  formLabel = 'Регистрация';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  // First
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  surnameFormControl = new FormControl('', [
    Validators.required
  ]);
  patrionityFormControl = new FormControl('', [
    Validators.required
  ]);
  // Second
  serialNumberControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Z]{2}\\d{7}$')
  ]);
  cardNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$')
  ]);
  // Third
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  confirmPasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  allControls: FormControl[] = [
    this.nameFormControl,
    this.surnameFormControl,
    this.patrionityFormControl,
    this.cardNumberFormControl,
    this.serialNumberControl,
    this.emailFormControl,
    this.patrionityFormControl,
  ];
  matcher = new MyErrorStateMatcher();
  private user: User;

  constructor(private http: HttpClient, private router: Router) {
  }

  @Input()
  set editUser(val: User) {
    this.user = val;
    this.formLabel = 'Редактировать';
    this.nameFormControl.setValue(this.user.name);
    this.surnameFormControl.setValue(this.user.surname);
    this.patrionityFormControl.setValue(this.user.patronymic);
    this.cardNumberFormControl.setValue(this.user.cardNumber);
    this.serialNumberControl.setValue(this.user.passportNumber);
    this.emailFormControl.setValue(this.user.login);
    this.passwordFormControl.setValue(this.user.password);
  }

  ngOnInit() {

  }


  signUp() {
    const user: User = {
      login: this.emailFormControl.value,
      password: this.passwordFormControl.value,
      name: this.nameFormControl.value,
      surname: this.surnameFormControl.value,
      patronymic: this.patrionityFormControl.value,
      cardNumber: this.cardNumberFormControl.value,
      passportNumber: this.serialNumberControl.value
    };

    if (!this.user) {
      this.http.post<any>('http://localhost:8080/api/vtb/auth/sign_up', user).subscribe(data => {
        this.router.navigate(['/', 'admin']);
        this.registrationComplete.emit(true);
      });
    } else {
      user.id = this.user.id;
      this.http.post<any>('http://localhost:8080/api/vtb/user/update', user).subscribe(data => {
        this.registrationComplete.emit(true);
      });
    }
  }

  allFieldsValid(): boolean {
    let allValid = true;
    for (const control of this.allControls) {
      if (control.status === 'INVALID') {
        allValid = false;
        break;
      }
    }
    return allValid;
  }
}
