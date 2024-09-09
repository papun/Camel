import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { SelectionModel} from '@angular/cdk/collections';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { LoginService } from '../../../services/login.service';
import { OltService } from '../../../services/olt.service';
import { DeviceDto, Elements } from '../../models/custom.model';


@Component({
  selector: 'app-olt-details',
  templateUrl: './olt-details.component.html',
  styleUrl: './olt-details.component.scss'
})
export class OltDetailsComponent  implements  AfterViewInit,OnInit{
  [x: string]: any;
  displayedColumns: string[] = ['select' , 'name', 'hostName','city', 'deviceType','vendor','popId', 'popLocation','migrated','actions'];
  dataSource = new MatTableDataSource<Elements>;
  router = inject(Router);
  loginService = inject(LoginService);
  oltservice = inject(OltService);
  selection=new SelectionModel<Elements>(true,[]);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  @ViewChild(MatSort)
  sort!: MatSort;
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  searchKeywordFilter = new FormControl();
  userName='';
  devices?:DeviceDto[];
  ngOnInit(): void {

    this.userName = this.loginService.getUserName()!;
    this.oltservice.getoltDetails().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  
  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDevices() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  select(data:any) {
    this._snackBar.open(`Selected ${data.deviceId}`, 'Dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
   
  }

  migrate(row:any){
    console.log(JSON.stringify(row));
    console.log(row.country);
    this.router.navigate(['olts/olt/'+row.country]);
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