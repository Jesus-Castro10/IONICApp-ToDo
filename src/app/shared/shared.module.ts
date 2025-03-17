import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


const IMPORTS = [CommonModule,
  IonicModule,
  FormsModule,]
@NgModule({
  declarations: [],
  imports: [...IMPORTS,],
  exports: [...IMPORTS],
})
export class SharedModule { }
