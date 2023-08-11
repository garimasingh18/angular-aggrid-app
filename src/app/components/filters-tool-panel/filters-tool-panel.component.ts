import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  ColDef,
  ColGroupDef,
  GridReadyEvent,
  SideBarDef,
} from 'ag-grid-community';
import 'ag-grid-enterprise';
import { IOlympicData } from './../../types/types';

@Component({
  selector: 'app-filters-tool-panel',
  templateUrl: './filters-tool-panel.component.html',
  styleUrls: ['./filters-tool-panel.component.scss'],
})
export class FiltersToolPanelComponent {
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      groupId: 'athleteGroupId',
      headerName: 'Athlete',
      children: [
        {
          headerName: 'Name',
          field: 'athlete',
          minWidth: 200,
          filter: 'agTextColumnFilter',
        },
        { field: 'age' },
        {
          groupId: 'competitionGroupId',
          headerName: 'Competition',
          children: [
            { field: 'year' },
            { field: 'date', minWidth: 180, suppressFiltersToolPanel: true },
          ],
        },
        { field: 'country', minWidth: 200 },
      ],
    },
    { colId: 'sport', field: 'sport', minWidth: 200 },
    {
      headerName: 'Medals',
      children: [
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ],
    },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
  };
  public sideBar: SideBarDef | string | string[] | boolean | null = {
    toolPanels: [
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
        toolPanelParams: {
          suppressExpandAll: true,
          suppressFilterSearch: true,
        },
      },
    ],
    defaultToolPanel: 'filters',
  };
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
}
