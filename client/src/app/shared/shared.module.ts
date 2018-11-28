import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReversePipe} from '@app/shared/pipes/reverse.pipe';

export const sharedModuleDeclarations = [
  ReversePipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...sharedModuleDeclarations],
  exports: [...sharedModuleDeclarations]
})
export class SharedModule { }
