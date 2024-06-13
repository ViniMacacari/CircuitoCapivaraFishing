import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewModalidadeComponent } from './preview-modalidade.component';

describe('PreviewModalidadeComponent', () => {
  let component: PreviewModalidadeComponent;
  let fixture: ComponentFixture<PreviewModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewModalidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
