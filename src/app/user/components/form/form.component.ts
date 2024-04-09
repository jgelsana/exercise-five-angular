import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.user = {} as User;
    this.userForm = {} as FormGroup;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [''],
      name: [''],
      bio: [''],
      active: [false]
    })
  }

  submit(user: User): void {
    console.log(`User added: ${user.name}` )
  }
}

