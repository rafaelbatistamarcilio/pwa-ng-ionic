import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    IonicModule
  ],
  declarations: [HeaderComponent]
})
export class SharedModule { }
