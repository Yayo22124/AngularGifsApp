import { CardListComponent } from './components/card-list/card-list.component';
import { CardListItemComponent } from './components/card-list-item/card-list-item.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
