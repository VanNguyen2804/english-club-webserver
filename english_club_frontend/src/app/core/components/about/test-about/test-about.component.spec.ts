import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAboutComponent } from './test-about.component';

describe('TestAboutComponent', () => {
  let component: TestAboutComponent;
  let fixture: ComponentFixture<TestAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
