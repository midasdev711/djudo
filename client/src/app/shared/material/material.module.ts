import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
} from '@angular/material';

const modules = [
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
]

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  declarations: [],
  exports: [
    modules
  ]
})
export class MaterialModule {
}
