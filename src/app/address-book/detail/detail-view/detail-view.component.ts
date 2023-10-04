import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressContact } from '../../models/address-book.model';

@Component({
  selector: 'detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  @Input() contact: AddressContact | null = null;
  @Output() backEvent = new EventEmitter<boolean>();

  goBack(): void {
    this.backEvent.emit(true);
  }
}
