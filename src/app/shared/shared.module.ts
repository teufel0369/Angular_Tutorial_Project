import {NgModule} from '@angular/core';
import {ConvertToSpacesPipe} from './convert-to-spaces.pipe';
import {StarComponent} from './star.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConvertToSpacesPipe,
    StarComponent,
    CommonModule,
    FormsModule
  ]
})

export class SharedModule { }
