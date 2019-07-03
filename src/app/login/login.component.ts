import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authService : AuthService) {
  }

  ngOnInit() {      
  }

  onEmailLogin(form: NgForm){  
    let usuario = form.value; 
    this.authService.loginEmail(usuario.email,usuario.password)
      .then( (res) => {
        this.router.navigate(['/admin'])
        console.log('Estás logeado!');   
      }).catch( err => {
        console.log(err.message);
        form.controls.password.reset();       

      });
  }

}
