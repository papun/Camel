import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  price: number;
  city: string;
  state: string;
  country: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    price: 100,
    city: 'angul',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    price: 200,
    city: 'dkl',
    state: 'bengal',
    country: 'Brazil',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    price: 400,
    city: 'ctc',
    state: 'Assam',
    country: 'France',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    price: 150,
    city: 'bbsr',
    state: 'Kerala',
    country: 'Germany',
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    price: 120,
    city: 'bbsr',
    state: 'Kerala',
    country: 'Germany',
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    price: 200,
    city: 'ctc',
    state: 'Assam',
    country: 'France',
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    price: 200,
    city: 'angul',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    price: 100,
    city: 'angul',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    price: 140,
    city: 'bbsr',
    state: 'Kerala',
    country: 'Germany',
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    price: 150,
    city: 'BBSR',
    state: 'Kerala',
    country: 'Germany',
  },
  {
    position: 11,
    name: 'Sodium',
    weight: 22.9897,
    symbol: 'Na',
    price: 400,
    city: 'Balasore',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 12,
    name: 'Magnesium',
    weight: 24.305,
    symbol: 'Mg',
    price: 300,
    city: 'Bhadrak',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 13,
    name: 'Aluminum',
    weight: 26.9815,
    symbol: 'Al',
    price: 200,
    city: 'angul',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 14,
    name: 'Silicon',
    weight: 28.0855,
    symbol: 'Si',
    price: 100,
    city: 'CTC',
    state: 'Assam',
    country: 'France',
  },
  {
    position: 15,
    name: 'Phosphorus',
    weight: 30.9738,
    symbol: 'P',
    price: 100,
    city: 'Baripada',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 16,
    name: 'Sulfur',
    weight: 32.065,
    symbol: 'S',
    price: 400,
    city: 'Baripada',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 17,
    name: 'Chlorine',
    weight: 35.453,
    symbol: 'Cl',
    price: 110,
    city: 'Baripada',
    state: 'odisha',
    country: 'India',
  },
  {
    position: 18,
    name: 'Argon',
    weight: 39.948,
    symbol: 'Ar',
    price: 111,
    city: 'CTC',
    state: 'Assam',
    country: 'France',
  },
  {
    position: 19,
    name: 'Potassium',
    weight: 39.0983,
    symbol: 'K',
    price: 100,
    city: 'BBSR',
    state: 'Kerala',
    country: 'Germany',
  },
  {
    position: 20,
    name: 'Calcium',
    weight: 40.078,
    symbol: 'Ca',
    price: 300,
    city: 'angul',
    state: 'odisha',
    country: 'India',
  },
];

@Component({
  selector: 'app-olt-details-overview',
  templateUrl: './olt-details-overview.component.html',
  styleUrl: './olt-details-overview.component.scss',
})
export class OltDetailsOverviewComponent  implements AfterViewInit {
  private path: string = "../../../assets";
  [x: string]: any;
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
    'price',
    'city',
    'state',
    'country',
    'actions',
  ];

  constructor(private route: ActivatedRoute,private domSanitizer: DomSanitizer, 
    public matIconRegistry: MatIconRegistry) {
      this.matIconRegistry.addSvgIcon("migrate", this.setPath(`${this.path}/migrate.svg`))
    }
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  router = inject(Router);

  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    let val:any = '';
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'));
      val = params.get('id');
    });

    this.dataSource.filter = val
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private setPath(url: string): SafeResourceUrl { 
    console.log(url);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url); 
   }

  select(data: any) {
    console.log(JSON.stringify(data));
    console.log(this.selection.selected.length)
  }

  migrate(row: any) {
    console.log(JSON.stringify(row));
    console.log(row.country);
    // this.router.navigate(['olts/olt/' + row.country]);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.name));
  }
}