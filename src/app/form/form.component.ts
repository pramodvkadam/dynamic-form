import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormServiceService} from "./form-service.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    payLoad: string;
    @Input()
  config: any[] = [];

    @Input() form: FormGroup;

  constructor(private formService : FormServiceService) {}

  ngOnInit() {
      console.log(this.config);
      this.form = this.formService.toFormGroup(this.config);
  }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
