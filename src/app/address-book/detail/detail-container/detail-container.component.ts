import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddressContact } from '../../models/address-book.model';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.scss'],
})
export class DetailContainerComponent implements OnInit, OnDestroy {
  contact$!: Observable<AddressContact | null>;
  constructor(
    private addressBookService: AddressBookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contact$ = this.addressBookService.getSelectedContact$();
  }

  goBack(event: boolean): void {
    this.router.navigate(['../../list'], {
      relativeTo: this.router.routerState.root,
    });
  }

  ngOnDestroy(): void {
    this.addressBookService.setSelectedContact(null);
  }
}
