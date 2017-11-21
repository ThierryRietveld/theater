import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lForm:FormGroup;
  
  username:string;
  password:string;

  constructor(private dataService:DataService, private fb: FormBuilder) {
    this.lForm = fb.group({
      'username': [null,Validators.required],
      'password' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  submitForm(data){
    console.log(data);
    if(data.password != data.passwordConfirm){
      console.log("wachtwoorden niet gelijk");
      return;
    }
    
    this.dataService.Register(data.username,data.firstname,data.infix,data.lastname,data.email,data.password);
  }

}
