import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm:FormGroup;
  
  username:string;
  firstname:string;
  infix:string;
  lastname:string;
  email:string;
  password:string;
  passwordConfirm:string;

  constructor(private dataService:DataService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'username': [null,Validators.required],
      'firstname' : [null, Validators.required],
      'infix' : [],
      'lastname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'passwordConfirm' : [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm(data){
    console.log(data);
    
    this.dataService.Register(data.username,data.firstname,data.infix,data.lastname,data.email,data.password);
  }

}
