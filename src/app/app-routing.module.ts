import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'adress-book',
  },
  {
    path: 'adress-book',
    loadChildren: () =>
      import('./address-book/address-book.module').then(
        (m) => m.AddressBookModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'adress-book',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
