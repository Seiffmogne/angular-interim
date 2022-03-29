import { map, Observable } from 'rxjs';
import { ConfirmDialogData } from './../model/confirm-dialog';
import { ConfirmDeleteComponent } from './../confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  

  confirmDialog(data:ConfirmDialogData):Observable<boolean>{
    return this.dialog.open(ConfirmDeleteComponent,{
      data,
      width:'400px',
      disableClose:true
    }).afterClosed().pipe(map(data=>data));

  }
}
