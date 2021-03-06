import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true; 
  isLoading = false;
  error: string = null;
  @ViewChild('form') form;
  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
    
  }
  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    if(! this.isLoginMode) {
    authObs = this.auth.signUp(email, password)
    } else {
    authObs = this.auth.logIn(email, password)
    }
    authObs.subscribe(response => {
      this.isLoading = false;
      this.router.navigate(['/recipes']);
      console.log(response)
     }, errorMessage => {
       this.error = errorMessage;
       this.isLoading = false;
     }) 
    this.form.reset(); 
  }
  onHandleError() {
     this.error = null;
  }
  constructor(private auth: AuthService, private router: Router) {

   }

  ngOnInit(): void {
  }

}
