import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltersToolPanelComponent } from './components/filters-tool-panel/filters-tool-panel.component';
import { BasicGridComponent } from './components/basic-grid/basic-grid.component';
import { HomeComponent } from './components/home/home.component';
import { CrossFilteringComponent } from './components/cross-filtering/cross-filtering.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filter-tool', component: FiltersToolPanelComponent },
  { path: 'basic', component: BasicGridComponent },
  { path: 'cross-filtering', component: CrossFilteringComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
