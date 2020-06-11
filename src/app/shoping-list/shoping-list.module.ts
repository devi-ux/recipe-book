import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShopingListComponent } from './shoping-list.component';
import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShopingListComponent,
    ShopingEditComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: "", component: ShopingListComponent}
    ]),
  ]
})

export class ShopingListModule {}
