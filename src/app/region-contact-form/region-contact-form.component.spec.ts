import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionContactFormComponent } from './region-contact-form.component';

describe('RegionContactFormComponent', () => {
  let component: RegionContactFormComponent;
  let fixture: ComponentFixture<RegionContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
