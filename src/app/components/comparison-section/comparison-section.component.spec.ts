import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonSectionComponent } from './comparison-section.component';

describe('ComparisonSectionComponent', () => {
  let component: ComparisonSectionComponent;
  let fixture: ComponentFixture<ComparisonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparisonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
