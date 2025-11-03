import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioV3Component } from './funcionario-v3.component';

describe('FuncionarioV3Component', () => {
  let component: FuncionarioV3Component;
  let fixture: ComponentFixture<FuncionarioV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionarioV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionarioV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
