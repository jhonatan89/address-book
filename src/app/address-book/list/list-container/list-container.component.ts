import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AddressContact,
  AddressContactResp,
} from '../../models/address-book.model';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  contacts$!: Observable<AddressContactResp> | null;
  constructor(
    private addressBookService: AddressBookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contacts$ = this.addressBookService.getContacts();
  }

  goToDetail(contact: AddressContact): void {
    this.addressBookService.setSelectedContact(contact);
    this.router.navigate(['../detail', contact.email.split('@')[0]], {
      relativeTo: this.route,
    });
  }

  changePage(event: any): void {
    this.contacts$ = this.addressBookService.getContacts(event.pageIndex + 1);
  }
}
