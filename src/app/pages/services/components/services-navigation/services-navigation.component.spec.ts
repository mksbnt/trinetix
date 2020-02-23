import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesNavigationComponent } from './services-navigation.component';

describe('ServicesNavigationComponent', () => {
  let component: ServicesNavigationComponent;
  let fixture: ComponentFixture<ServicesNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
