import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlhComponent } from './editlh.component';

describe('EditlhComponent', () => {
  let component: EditlhComponent;
  let fixture: ComponentFixture<EditlhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
