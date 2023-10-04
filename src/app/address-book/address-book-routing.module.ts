import { CommonModule } from '@angular/common';
import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';
import { DetailContainerComponent } from './detail/detail-container/detail-container.component';
import { ListContainerComponent } from './list/list-container/list-container.component';
import { AddressBookService } from './services/address-book.service';

export const noSelectedContactGuard = () => {
  const router = inject(Router);
  const addressService = inject(AddressBookService);
  return addressService.getSelectedContact$().pipe(
    map((value) => {
      return !value ? router.navigate(['../list']) : true;
    })
  );
};

const routes: Routes = [
  {
    path: 'list',
    component: ListContainerComponent,
  },
  {
    path: 'detail/:id',
    component: DetailContainerComponent,
    canActivate: [noSelectedContactGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AddressBookRoutingModule {}
