import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AddressContact,
  AddressContactResp,
} from '../models/address-book.model';

@Injectable({
  providedIn: 'root',
})
export class AddressBookService {
  url =
    'https://randomuser.me/api/?results=10&inc=name,location,dob,email,picture,phone&nat=us&seed=nuvalence';
  private selectedAddressContactSub: BehaviorSubject<AddressContact | null> =
    new BehaviorSubject<AddressContact | null>(null);
  private selectedAddressContact$: Observable<AddressContact | null> =
    this.selectedAddressContactSub.asObservable();

  constructor(private http: HttpClient) {}

  getContacts(page: number = 1): Observable<AddressContactResp> {
    return this.http.get<AddressContactResp>(`${this.url}?page=${page}`);
  }

  getSelectedContact$(): Observable<AddressContact | null> {
    return this.selectedAddressContact$;
  }

  setSelectedContact(contact: AddressContact | null): void {
    this.selectedAddressContactSub.next(contact);
  }
}
