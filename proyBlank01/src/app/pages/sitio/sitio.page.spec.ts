import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioPage } from './sitio.page';

describe('SitioPage', () => {
  let component: SitioPage;
  let fixture: ComponentFixture<SitioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
