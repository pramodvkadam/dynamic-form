import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Data} from '@angular/router';
import {Component} from "@angular/core";

@Component({
    selector: "app2",
    templateUrl: "./app2.component.html"
})
export class App2Component {

    private data: any;
    private renderData: any;

    constructor() {
        this.data = [
            {Name: "Name", Tyep: "Textbox", Required: true},
            {Name: "Gender", Tyep: "Radio", Required: true},
            {Name: "DOB", Tyep: "Date", Required: false},
            {Name: "City", Tyep: "Dropdown", Required: true},
        ];
    }

    ngOnInit() {


        this.data.array.forEach(element => {
            let ctrl = this.getFormcontrol(element);
            this.renderData[ctrl.Name] = ctrl.Control;
        });

        let formgroup = new FormGroup(this.renderData);
    }

    getFormcontrol(element) {
        let formContrl;

        switch (element.Type) {
            case "Textbox":
                if (element.required)
                    formContrl = new FormControl("", Validators.required);
                else
                    formContrl = new FormControl("");
                break;
            case "Checkbox":
                if (element.required)
                    formContrl = new FormControl("", Validators.required);
                else
                    formContrl = new FormControl("");
                break;
            case "Date":
                if (element.required)
                    formContrl = new FormControl("", Validators.required);
                else
                    formContrl = new FormControl("");
                break;
            case "Dropdown":
                if (element.required)
                    formContrl = new FormControl("", Validators.required);
                else
                    formContrl = new FormControl("");

                break;
            case "Default":

                break;
        }

        let contrl = {"Name": element.Name, Control: formContrl};

        //contrl[element.Name] = formContrl;

        return contrl;
    }
}