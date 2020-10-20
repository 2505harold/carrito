import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages components
import { HeaderComponent } from '../shared/header/header.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, SidenavComponent],
})
export class SharedModule {}
