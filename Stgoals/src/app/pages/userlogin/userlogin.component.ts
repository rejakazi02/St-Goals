import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  responceData: any;

  // @ViewChild('formElement') formElement: NgForm | undefined;
  form!: FormGroup;
  errorMessage: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  logIn() {
  

    if (this.form.valid) {
      this.authService.anyUserLogin(this.form.value).subscribe(
        (result) => {
          if (result != null) {
            this.responceData = result;
           console.log('add', this.responceData);

            localStorage.setItem('token', this.responceData?.access_token);
            localStorage.setItem('role', this.responceData?.role);

            // console.log('login token',this.responceData.access_token);
            if (this.responceData?.role === 'admin') {
              this.route.navigate(['/', 'home']);
              this.toastr.success(result.message);
              console.log('user Id:', this.responceData?.role);
            }
            if (this.responceData?.role === 'student') {
              this.route.navigate(['/', 'home']);
              this.toastr.success(result.message);
              console.log('user Id:', this.responceData?.role);
            }
            if (this.responceData?.role === 'staff') {
              this.route.navigate(['/', 'home']);
              this.toastr.success(result.message);
              console.log('user Id:', this.responceData?.role);
            }
          }
        },
        (err) => {
          this.errorMessage = err.error.errors;
          if (err.error.errors.email) {
            this.toastr.error(err.error.errors.email);
          }
          if (err.error.errors.password) {
            this.toastr.error(err.error.errors.password);
          }

          // alert(err.error.message)
        }
      );
    }
  }

  logout(): void {
    this.authService.logOut();
  }

}
