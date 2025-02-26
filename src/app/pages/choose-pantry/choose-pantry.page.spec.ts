import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoosePantryPage } from './choose-pantry.page';

describe('ChoosePantryPage', () => {
  let component: ChoosePantryPage;
  let fixture: ComponentFixture<ChoosePantryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePantryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
