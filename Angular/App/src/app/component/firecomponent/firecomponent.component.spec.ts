import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirecomponentComponent } from './firecomponent.component';

describe('FirecomponentComponent', () => {
  let component: FirecomponentComponent;
  let fixture: ComponentFixture<FirecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
