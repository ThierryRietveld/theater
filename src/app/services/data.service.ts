import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  postData;

  constructor(private http:HttpClient) {}

  Register(user, first, infix, last, email, pass) {

    this.postData = {
      username: user,
      firstname: first,
      infix: infix,
      lastname: last,
      email: email,
      password: pass
    }

    this.http.post('http://localhost:4201/register', this.postData)
    .subscribe(data => {
      if (data[0]) {
        console.log(data);
      } else {
        console.log("Registration went wrong");
      }
    });

  }

}
