import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapHeaderComponent } from './boostrap-header.component';

describe('BoostrapHeaderComponent', () => {
  let component: BoostrapHeaderComponent;
  let fixture: ComponentFixture<BoostrapHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostrapHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
