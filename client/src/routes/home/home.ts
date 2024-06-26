import {customElement, GenesisElement, observable} from '@genesislcap/web-core';
import { HomeStyles as styles } from './home.styles';
import { HomeTemplate as template } from './home.template';
import {EntityManagement} from '@genesislcap/foundation-entity-management';
import {RapidGridPro} from '@genesislcap/rapid-grid-pro';
import {Connect} from '@genesislcap/foundation-comms';

EntityManagement;

//describes the default config for the grid columns
const defaultColumnConfig = {
  enableCellChangeFlash: true,
  enableRowGroup: true,
  enablePivot: true,
  enableValue: true,
};

//grid columns that will be showed
const COLUMNS = [
  {
    ...defaultColumnConfig,
    field: 'TRADE_ID',
    headerName: 'Id',
  },
  {
    ...defaultColumnConfig,
    field: 'QUANTITY',
    headerName: 'Quantity',
  },
  {
    ...defaultColumnConfig,
    field: 'PRICE',
    headerName: 'Price',
  },
  {
    ...defaultColumnConfig,
    field: 'SYMBOL',
    headerName: 'Symbol',
  },
  {
    ...defaultColumnConfig,
    field: 'DIRECTION',
    headerName: 'Direction',
  },
  {
    ...defaultColumnConfig,
    field: 'TRADE_STATUS',
    headerName: 'STATUS',
  },
  {
    ...defaultColumnConfig,
    field: 'ENTERED_BY',
    headerName: 'USER',
  },
  {
    ...defaultColumnConfig,
    field: 'TRADE_DATE',
    headerName: 'DATE',
  },
];


@customElement({
  name: 'home-route',
  template,
  styles,
})


export class Home extends GenesisElement {

    @observable columns: any = COLUMNS;

    public positionsGrid!: RapidGridPro;

    @Connect connection: Connect;
}
