import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService,private router:Router) {}
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
  ngOnInit(): void {
    if (this.loginService.isLoggedIn())  {
      this.router.navigate(['/olts']);
    }
  }
  login() {
    this.loginService.login(this.form.value).subscribe(
      (result) => {
        this.router.navigate(['/afsdfsdf']);
      },
      (err) => {
        alert(err);
      }
    );
  }
}
