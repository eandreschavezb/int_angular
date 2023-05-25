import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotellaComponent } from './botella.component';

describe('BotellaComponent', () => {
  let component: BotellaComponent;
  let fixture: ComponentFixture<BotellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotellaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
