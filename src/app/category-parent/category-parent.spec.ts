import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryParent } from './category-parent';

describe('CategoryParent', () => {
  let component: CategoryParent;
  let fixture: ComponentFixture<CategoryParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryParent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
