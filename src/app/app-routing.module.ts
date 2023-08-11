import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltersToolPanelComponent } from './components/filters-tool-panel/filters-tool-panel.component';
import { BasicGridComponent } from './components/basic-grid/basic-grid.component';

const routes: Routes = [
  { path: 'filter-tool', component: FiltersToolPanelComponent },
  { path: 'basic', component: BasicGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
