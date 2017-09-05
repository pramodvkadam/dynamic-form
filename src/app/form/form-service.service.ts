import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class FormServiceService {

  toFormGroup(qControls: Array<any> ) {
    const group: any = {};

    qControls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
          : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
