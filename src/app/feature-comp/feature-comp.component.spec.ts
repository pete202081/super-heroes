import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCompComponent } from './feature-comp.component';

describe('FeatureCompComponent', () => {
  let component: FeatureCompComponent;
  let fixture: ComponentFixture<FeatureCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
