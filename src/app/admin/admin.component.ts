import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {  
  user : any = {};
  isLogin: boolean;

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.user.email = auth.email;
        //this.user.id = auth.uid;               
      }else{
        this.isLogin = false;
      }
    });
  }

  logoutUser(){   
    this.authService.logout()
      .then( (res) => this.router.navigate(['/login-fain'] ) 
    );
  }

}
