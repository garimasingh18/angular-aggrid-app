import { Component } from '@angular/core';
import { ColDef, FirstDataRenderedEvent } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { getData } from './data';

@Component({
  selector: 'app-cross-filtering',
  templateUrl: './cross-filtering.component.html',
  styleUrls: ['./cross-filtering.component.scss'],
})
export class CrossFilteringComponent {
  public columnDefs: ColDef[] = [
    { field: 'salesRep', chartDataType: 'category' },
    { field: 'handset', chartDataType: 'category' },
    { field: 'sale', chartDataType: 'series' },
    { field: 'saleDate', chartDataType: 'category' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: 'agSetColumnFilter',
    floatingFilter: true,
    resizable: true,
  };
  public rowData: any[] | null = getData();
  public chartThemes: string[] = ['ag-default-dark'];

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.createCrossFilterChart({
      chartType: 'pie',
      cellRange: {
        columns: ['salesRep', 'sale'],
      },
      aggFunc: 'sum',
      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text: 'Sales by Representative ($)',
          },
        },
        pie: {
          series: {
            title: {
              enabled: false,
            },
          },
        },
      },
      chartContainer: document.querySelector('#pieChart') as any,
    });
  }
}
