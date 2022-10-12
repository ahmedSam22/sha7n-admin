import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';
import Swal from 'sweetalert2';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  shippment;
  constructor(private dialog:MatDialog,private spinner:NgxSpinnerService,private globalService:GlobalService) { }

  ngOnInit(): void {
    this.allTransactions()
  }

  allTransactions(){
    this.spinner.show()
    this.globalService.getTransactions().pipe(map(res=>res['data'].data)).subscribe(res=>{
      this.spinner.hide()
      this.shippment=res
      console.log(res)
    })
  }


}
