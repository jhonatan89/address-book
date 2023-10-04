import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddressContact } from '../../models/address-book.model';
import { DetailViewComponent } from './detail-view.component';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;
  const mockContact: AddressContact = {
    name: { title: 'Mrs', first: 'John', last: 'Doe' },
    email: 'john@example.com',
    location: {
      street: { number: 123, name: 'Main St' },
      city: 'Chicago',
      state: 'IL',
      postcode: 12345,
    },
    dob: { date: '2000-01-01T00:00:00.000Z', age: 21 },
    phone: '123-456-7890',
    picture: {
      large: 'avatar_large.jpg',
      thumbnail: 'avatar_small.jpg',
      medium: 'avatar.jpg',
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailViewComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Go Back button', () => {
    const backButton = fixture.nativeElement.querySelector('.card--back');
    expect(backButton).toBeTruthy();
  });
  it('should call goBack() method when Go Back button is clicked', () => {
    spyOn(component, 'goBack');
    const backButton = fixture.nativeElement.querySelector('.card--back');
    backButton.click();
    expect(component.goBack).toHaveBeenCalled();
  });

  it('should have minimun contact information', () => {
    component.contact = mockContact;
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('mat-card-title');
    const labels = fixture.nativeElement.querySelectorAll('.card--full--text');
    const subtitleElement =
      fixture.nativeElement.querySelector('mat-card-subtitle');
    expect(labels[0].textContent).toContain('Phone');
    expect(labels[1].textContent).toContain('Address: 123 Main St');
    expect(titleElement.textContent).toContain('John Doe');
    expect(subtitleElement.textContent).toContain('john@example.com');
  });
});
