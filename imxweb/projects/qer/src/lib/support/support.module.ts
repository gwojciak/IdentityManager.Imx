import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoeContactComponent } from './coe-contact/coe-contact.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { PopupSupportWindowComponent } from './popup-support-window/popup-support-window.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CoeContactComponent,
    InstructionsComponent,
    ChangelogComponent,
    PopupSupportWindowComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    CoeContactComponent,
    InstructionsComponent,
    ChangelogComponent,
    PopupSupportWindowComponent,
    MatTableModule
  ]
})
export class SupportModule { }
