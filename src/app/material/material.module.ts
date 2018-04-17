import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule, MatIconModule, MatInputModule, MatCheckboxModule, MatChipsModule
  ],
  exports: [MatSelectModule, MatIconModule, MatInputModule, MatCheckboxModule, MatChipsModule],
  declarations: []
})
export class MaterialModule { }
