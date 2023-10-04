import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressContactResp } from '../../models/address-book.model';
import { ListViewComponent } from './list-view.component';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;
  const mockContacts: AddressContactResp | null = {
    info: { page: 1, seed: 'abc', results: 1, version: '1.0' },
    results: [
      {
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
      },
      {
        name: { title: 'Mrs', first: 'Pablo', last: 'Doe' },
        email: 'pablo@example.com',
        location: {
          street: { number: 123, name: 'Main St' },
          city: 'Miami',
          state: 'FL',
          postcode: 12345,
        },
        dob: { date: '2000-01-01T00:00:00.000Z', age: 21 },
        phone: '123-456-7890',
        picture: {
          large: 'avatar_large.jpg',
          thumbnail: 'avatar_small.jpg',
          medium: 'avatar.jpg',
        },
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListViewComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create listview', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of contacts', () => {
    component.contacts = mockContacts;
    fixture.detectChanges();

    const listItemElements =
      fixture.nativeElement.querySelectorAll('.list--item');
    expect(listItemElements.length).toBe(mockContacts.results.length);
    expect(listItemElements[0].textContent).toContain('John Doe');
    expect(listItemElements[0].textContent).toContain('john@example.com');
    expect(listItemElements[0].textContent).toContain('123-456-7890');
  });

  it('should render No result message', () => {
    component.contacts = {
      info: { page: 1, seed: 'abc', results: 0, version: '1.0' },
      results: [],
    };
    fixture.detectChanges();
    const listItemElements =
      fixture.nativeElement.querySelectorAll('.list--item');
    expect(listItemElements[0].textContent).toContain('No results');
  });
});
