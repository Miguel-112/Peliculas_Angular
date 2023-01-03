import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ContantUri } from 'src/app/utils/contantUri';
import { properties } from 'src/assets/properties/properties';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  logo = properties.logo;
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private fb : FormBuilder,
    private readonly apiService: ApiService<any>
  ){
     
  }

  ngOnInit(): void {
    
  
     this.formLogin = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
     });
    
  }

  login(){
    if(this.formLogin.invalid){

      this.formLogin.markAllAsTouched();
      for(const key in this.formLogin.controls){
        
        this.formLogin.controls[key].markAsDirty;

      }
      return;
    }

    const {username,password} = this.formLogin.value;

    const body = {

        username,
        password,
        "request_token": "1531f1a558c8357ce8990cf887ff196e8f5402ec"
      }
    

    const configPost = {url: ContantUri.validateWith_Login, params: ContantUri.apiKey, body};

    this.apiService.postService(configPost).subscribe(value =>{
      console.log(value);
    })
    console.log(this.formLogin.value);
  }

}
