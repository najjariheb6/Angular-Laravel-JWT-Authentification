import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }

  public error = null;

  constructor(private http: HttpClient) { }


  onSubmit() {
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => this.error = error.error.error
    );
  }

  // hundleError(error) {
  //   this.errors = error.error.error;
  // }

  ngOnInit(): void {
  }

}
