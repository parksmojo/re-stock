import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroceryListPage } from './grocery-list.page';

describe('GroceryListPage', () => {
  let component: GroceryListPage;
  let fixture: ComponentFixture<GroceryListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
