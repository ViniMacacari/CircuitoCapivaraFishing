import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoBarcosComponent } from './inscricao-barcos.component';

describe('InscricaoBarcosComponent', () => {
  let component: InscricaoBarcosComponent;
  let fixture: ComponentFixture<InscricaoBarcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaoBarcosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscricaoBarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
