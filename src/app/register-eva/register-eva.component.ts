import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRegistration} from './model/user-registration';
import {PictureModel} from './model/picture-model';
import {RegisterService} from './services/register-service';
import {ApplicationProperties} from '../shared/properties/application-properties';
import {RegisterRequest} from './model/register-request';
// to access jquery
declare var $: any;

@Component({
    selector: 'app-register-eva',
    templateUrl: './register-eva.component.html',
    styleUrls: ['./register-eva.component.css'],
    providers: [RegisterService]
})

/**
 * @class RegisterEvaComponent
 * Register the user to EVA.
 */
export class RegisterEvaComponent implements OnInit {
    // object of user registration.
    user: RegisterRequest;
    // form group object
    registerForm: FormGroup;
    // user name
    userName: string;
    // image
    image: any;
    // base64 image
    base64: Array<string>;
    // flag for privacy
    privacyFlag = false;
    // flag for image.
    imageFlag = false;
    // flag for username require.
    userNameReqFlag = false;
    // flag for username pattern.
    userNamepatFlag = false;
    // flag for contact number require.
    contactReqFlag = false;
    // flag for contact number pattern.
    contactpatFlag = false;
    constructor( private formBuilder: FormBuilder , private registerService: RegisterService,
                 private properties: ApplicationProperties ) {
        this.registerForm = formBuilder.group({
            'privacy': ['', Validators.required],
            'userName': ['' , [Validators.compose([Validators.pattern('[a-zA-Z]+'), Validators.required])] ],
            'contactNo': ['' , [Validators.compose([Validators.pattern('[0-9]+'), Validators.required])]  ],
            'inputImage': ['', Validators.required]
        });
        this.user = new RegisterRequest();

    }

    ngOnInit() {}
    // register the customer.
    registerCustomer() {

        if (this.registerForm.controls['privacy'].hasError('required')) {
          this.privacyFlag = true;
          return;
        }
        this.privacyFlag = false ;
        if (this.registerForm.controls['inputImage'].hasError('required')) {
            this.imageFlag = true;
            return;
        }
        this.imageFlag = false;
        if (this.registerForm.controls['userName'].hasError('required')) {
            this.userNameReqFlag = true;
            return;
        }
        this.userNameReqFlag = false;
        if (this.registerForm.controls['userName'].hasError('pattern')) {
            this.userNamepatFlag = true;
            return;
        }
        this.userNamepatFlag = false;
        if (this.registerForm.controls['contactNo'].hasError('required')) {
            this.contactReqFlag = true;
            return;
        }
        this.contactReqFlag = false;
        if (this.registerForm.controls['contactNo'].hasError('pattern')) {
            this.contactpatFlag = true;
            return;
        }
        this.contactpatFlag = false;
        this.base64 = this.image.split(',');
        this.user.nickName = this.registerForm.get('userName').value;
        this.user.phone = this.registerForm.get('contactNo').value;
        this.user.pictureString = this.base64[1];
        this.registerService.registerUser(this.user).subscribe(data => {
            alert('Registered Successfully..');
            this.registerForm.reset();
            $('#removeBtn').click();
        }, error => {
            alert('Registered Successfully..');
                this.registerForm.reset();
                $('#removeBtn').click();
        } );

    }
    // get Base64 of image.
     public getBase64Url (input)  {
         const self = this;
         const file    = document.querySelector('input[type=file]')['files'][0];
         const reader = new FileReader();
         reader.addEventListener('load', function () {
             self.image = reader.result;
         }, false);
         if (file) {
             reader.readAsDataURL(file);
         }
    }



}
