import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';
import Swal from 'sweetalert2';
import { ProviderDetailsComponent } from '../provider-details/provider-details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

   testmoinals
  constructor( 
    public route: ActivatedRoute,
    private spinner:NgxSpinnerService,
    private service:GlobalService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getTestmonials()
  }
  getTestmonials(){
    this.spinner.show()
    this.service.getTestmonials().pipe(map(res=>res['data'])).subscribe((response:any)=>{
      console.log(response)
      this.testmoinals = response
    this.spinner.hide()
    })
  }






  editTest(user){
    let dialogRef = this.dialog.open(ProviderDetailsComponent, {
      data:user,
      height: '450px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getTestmonials()
    });
  }
  deleteTest(id){
    this.spinner.show()

    this.service.DeleteTest(id).subscribe(res=>{
      this.spinner.hide()
      Swal.fire(
        'نجااااح',
        'تم الحذف  بنجاح',
        'success'
        )

    })
    this.getTestmonials()
  }
}
