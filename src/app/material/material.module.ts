import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [],
  exports: [BrowserAnimationsModule,
      MatButtonModule,
      MatMenuModule
  ]
})
export class MaterialModule { }