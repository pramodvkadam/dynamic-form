import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from './services/user-service';
import {User} from './domain/user';
import {DropdownControl} from "./form/dropdown-control";
import {ControlBase} from "./form/control-base";
import {TextboxControl} from "./form/textbox-control";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    userForm: FormGroup;
    title = 'app';

    formConfig: ControlBase<any>[] = [

    new DropdownControl({
        key: 'City',
        label: 'City',
        options: [
            {key: 'pune',  value: 'Pune'},
            {key: 'mumbai',  value: 'Mumbai'},
            {key: 'nagpur',   value: 'Nagpur'},
            {key: 'kokan', value: 'Kokan'}
        ],
        order: 3
    }),

    new TextboxControl({
        key: 'name',
        label: 'Name',
        value: '',
        required: true,
        order: 1
    }),

    new TextboxControl({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
    })
];


    ngOnInit() {
        this.userForm = new FormGroup({
            uname: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),

            tc: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
            child: new FormControl('')

        });
    }

    isValidFormSubmitted: boolean = null;
    user = new User();

    constructor(private userService: UserService) {
    }

    onFormSubmit() {
        this.isValidFormSubmitted = false;
        if (this.userForm.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        if (this.isValidFormSubmitted == true) {


        }
        console.log(this.userForm.valid);
        console.log(this.userForm.get('uname').value);
        console.log(this.userForm.get('gender').value);
        // console.log(this.userForm.get('married').value);
        console.log(this.userForm.get('tc').value);
        console.log(this.userForm.get('state').value);
        console.log(this.userForm.get('status').value);
        console.log(this.userForm.get('childs').value);

        //console.log("User Name: " + user.userName);
        //  this.user.userName = this.userForm.get('uname').value;
        //  this.user.gender = this.userForm.get('gender').value;
        //  //this.user.isMarried = this.userForm.get('married').value;
        //  this.user.isTCAccepted = this.userForm.get('tc').value;
        // this.user.state=this.userForm.get('state').value;
        // this.user.status=this.userForm.get('status').value;
        //  this.userService.createUser(this.user);
        //  this.reset();
    }

    reset() {
        this.userForm.reset({
            married: false
        });
    }
}
