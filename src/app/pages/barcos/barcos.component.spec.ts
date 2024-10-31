import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcosComponent } from './barcos.component';

describe('BarcosComponent', () => {
  let component: BarcosComponent;
  let fixture: ComponentFixture<BarcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarcosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
