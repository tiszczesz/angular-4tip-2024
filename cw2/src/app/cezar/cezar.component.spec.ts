import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CezarComponent } from './cezar.component';

describe('CezarComponent', () => {
  let component: CezarComponent;
  let fixture: ComponentFixture<CezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CezarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
