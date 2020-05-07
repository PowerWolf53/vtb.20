import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }


  signIn() {
    this.http.post<any>('http://localhost:8080/api/vtb/auth/sign_in',
      {
        login: this.emailFormControl.value,
        password: this.passwordFormControl.value
      }).subscribe(data => {
        localStorage.setItem('role', data.role);
        this.router.navigate(['/', 'admin']);

    });
  }
}
