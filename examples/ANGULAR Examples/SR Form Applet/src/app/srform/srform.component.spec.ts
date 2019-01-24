import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRFormComponent } from './srform.component';

describe('SrformComponent', () => {
  let component: SRFormComponent;
  let fixture: ComponentFixture<SRFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
