import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {    
  }

  onGoogleLogin(){
    this.authService.loginGoogle()    
    .then((res) => {
      //this.router.navigate(['/admin/bienvenida']);
      console.log('Estás logeado!');
      alert('Estás logeado!');      
    }).catch( err => console.log(err.message));
  }

}
