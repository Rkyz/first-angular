import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondkategoriComponent } from './secondkategori.component';

describe('SecondkategoriComponent', () => {
  let component: SecondkategoriComponent;
  let fixture: ComponentFixture<SecondkategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondkategoriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondkategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
