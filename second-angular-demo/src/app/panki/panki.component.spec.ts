import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PankiComponent } from './panki.component';

describe('PankiComponent', () => {
  let component: PankiComponent;
  let fixture: ComponentFixture<PankiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PankiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PankiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
