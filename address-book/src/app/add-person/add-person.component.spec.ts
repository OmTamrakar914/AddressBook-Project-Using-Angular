import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddPersonComponent } from './add-person.component';

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPersonComponent], // ✅ Use declarations instead of imports
      imports: [FormsModule, RouterTestingModule] // ✅ Add FormsModule for ngModel & RouterTestingModule for navigation
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
