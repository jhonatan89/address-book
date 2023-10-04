import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AddressContact,
  AddressContactResp,
} from '../../models/address-book.model';

@Component({
  selector: 'address-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  @Input() contacts: AddressContactResp | null = null;
  @Output() contactSelected = new EventEmitter<AddressContact>();
  @Output() page = new EventEmitter<string>();

  goToDetail(contact: AddressContact) {
    this.contactSelected.emit(contact);
  }

  changePage(event: any) {
    this.page.emit(event);
  }
}
