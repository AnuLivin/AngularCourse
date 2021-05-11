import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlhComponent } from './addlh.component';

describe('AddlhComponent', () => {
  let component: AddlhComponent;
  let fixture: ComponentFixture<AddlhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
