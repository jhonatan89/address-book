import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddressBookRoutingModule } from './address-book-routing.module';
import { DetailContainerComponent } from './detail/detail-container/detail-container.component';
import { DetailViewComponent } from './detail/detail-view/detail-view.component';
import { ListContainerComponent } from './list/list-container/list-container.component';
import { ListViewComponent } from './list/list-view/list-view.component';

@NgModule({
  declarations: [
    ListContainerComponent,
    ListViewComponent,
    DetailViewComponent,
    DetailContainerComponent,
  ],
  imports: [CommonModule, SharedModule, AddressBookRoutingModule],
})
export class AddressBookModule {}
