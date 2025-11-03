import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioV2Component } from './funcionario-v2.component';

describe('FuncionarioV2Component', () => {
  let component: FuncionarioV2Component;
  let fixture: ComponentFixture<FuncionarioV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionarioV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionarioV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
