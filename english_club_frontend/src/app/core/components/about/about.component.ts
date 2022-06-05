import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestAboutComponent } from './test-about/test-about.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit, AfterContentInit {

  public aboutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  });

  public ageField = '';
  public nameField = '';

  @ViewChild('test') testAboutComponent: TestAboutComponent;

  @ContentChild('content') contentComponent: TestAboutComponent;
  constructor() { }

  ngAfterViewInit(): void {

    console.log(this.testAboutComponent);
  }

  ngAfterContentInit(): void {

    console.log(this.contentComponent);
  }
  ngOnInit(): void {

    this.aboutForm.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {

      },
      complete: () => {

      }
    })
  }

  public submit() {

  }

  public test1(form: any) {
    console.log(form)
  }

}
