import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.css']
})
export class DynamicControlComponent {

  @Input() control: any;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }

}
