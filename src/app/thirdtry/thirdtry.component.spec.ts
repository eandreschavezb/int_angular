import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdtryComponent } from './thirdtry.component';

describe('ThirdtryComponent', () => {
  let component: ThirdtryComponent;
  let fixture: ComponentFixture<ThirdtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdtryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
