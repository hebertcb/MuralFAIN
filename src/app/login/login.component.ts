import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authService : AuthService) { }

  ngOnInit() {    
  }

  onGoogleLogin(){
    this.authService.loginGoogle()    
    .then((res) => {
      this.router.navigate(['/admin']);
      console.log('Estás logeado!');   
    }).catch( err => console.log(err.message));
  }

}
