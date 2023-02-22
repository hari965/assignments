import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment';

  employee: any[] = [];
  updateBtns = false;
  currentIndex: any;
  newForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newForm = fb.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      company: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmpassword: ['', Validators.compose([Validators.required])],
      gender: ['', [Validators.compose([Validators.required])]],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          ,
        ]),
      ],
    });
  }
  register() {
    this.employee.push(this.newForm.value);
    console.log(this.employee);
  }
  deleteData(index: any) {
    this.employee.splice(index, 1);
  }
  edit(employee: any, index: any) {
    this.currentIndex = index;
    this.newForm.setValue(employee);
    this.updateBtns = true;
  }
  update() {
    this.employee[this.currentIndex] = this.newForm.value;
    this.updateBtns = false;
  }
}
