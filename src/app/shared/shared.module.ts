import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages components
import { HeaderComponent } from '../shared/header/header.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, Header2Component],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, SidenavComponent, Header2Component],
})
export class SharedModule {}
