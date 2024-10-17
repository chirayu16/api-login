import { FormsModule } from '@angular/forms';
import { ApiCreds } from './../../interface/api-creds';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj : ApiCreds;

  constructor(private http: HttpClient ) {
    this.loginObj = {
      emailId: '',
      password: '',
    };
  }

  onLogin() {

    let host = "http://localhost:4200";
    let url = "/api/User/Login"
    
       this.http.post(`${host}${url}`,this.loginObj).subscribe((res:any) =>{
      if(res.result) {
        alert("login success");
      }
      else{
        alert(res.message);
      }
    })

  }

}
