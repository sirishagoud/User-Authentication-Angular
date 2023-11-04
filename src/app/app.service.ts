import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  environment: any
  constructor(
    private http: HttpClient,
    @Inject('environment') environmnet: any,
  ) {
    this.environment = environmnet;
  }

  registerUser(body: any) {

    //   let headers = new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'X-RapidAPI-Key': '28856fce5cmsh4cfecd4882874f4p18c89ejsn392bb31fe43a',
    //     'X-RapidAPI-Host': 'registration31.p.rapidapi.com'
    //   });

    // let options = { headers: headers };

    // console.log("jghfd", body);

    return this.http.post(this.environment.authenticationApi.url + this.environment.authenticationApi.path.register, body).pipe(
      map((res) => {
        console.log("hjuytftrdrt", res);

        return res;
      }),
    )

  }


  loginUser(body: any) {
    return this.http.post(this.environment.authenticationApi.url + this.environment.authenticationApi.path.login, body).pipe(
      map((res) => {
        console.log("hjuytftrdrt", res);

        return res;
      }),
    )

  }

  getUsersList() {
    return this.http.get(this.environment.usersList.url).pipe(
      map((res) => {
        return res;
      }),
    )
  }

  addUser(body: any) {
    return this.http.post(this.environment.usersList.url + this.environment.usersList.path.addUser, body).pipe(
      map((res) => {
        return res;
      }),
    )

  }
}
