import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { HeaderComponent } from './components/header/header.component';


const IMPORTS = [
  CommonModule,
  IonicModule,
  FormsModule,
  ReactiveFormsModule
]

const COMPONENTS = [DatePickerComponent, HeaderComponent]

@NgModule({
  declarations: [...COMPONENTS, FormatDatePipe],
  imports: [...IMPORTS,],
  exports: [...IMPORTS, ...COMPONENTS, FormatDatePipe],
})
export class SharedModule { }
