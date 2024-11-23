import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLogin } from '@interfaces/login';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private formBuilder = inject(FormBuilder);
  private loginSrv = inject(LoginService);
  
  constructor() { }

  public shouldShowPassword: boolean = false;
  
  public loginForm = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    shouldRemember: [false, Validators.required],
  })

  public login(): void {
    this.loginSrv.login(this.loginForm.value as UserLogin);
    console.log(this.loginSrv.getLoggedUser());
  }

  public showHidePassword(): void {
    this.shouldShowPassword = !this.shouldShowPassword;
  }
}
