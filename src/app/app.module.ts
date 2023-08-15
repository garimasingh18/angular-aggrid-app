import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FiltersToolPanelComponent } from './components/filters-tool-panel/filters-tool-panel.component';
import { BasicGridComponent } from './components/basic-grid/basic-grid.component';
import { HomeComponent } from './components/home/home.component';
import { CrossFilteringComponent } from './components/cross-filtering/cross-filtering.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersToolPanelComponent,
    BasicGridComponent,
    HomeComponent,
    CrossFilteringComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AgGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
