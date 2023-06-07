import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaCategoriesComponent } from './mana-categories.component';

describe('ManaCategoriesComponent', () => {
  let component: ManaCategoriesComponent;
  let fixture: ComponentFixture<ManaCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManaCategoriesComponent]
    });
    fixture = TestBed.createComponent(ManaCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
