import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { GlobalService } from 'src/app/services/global.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  permissions =[]
  form:FormGroup;
  color='#c7d494';
  constructor(
    private formbuilder:FormBuilder,
    private service:GlobalService,
    private spinner:NgxSpinnerService,
    private router:Router,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
      role:['',Validators.required],




    })
    this.dropdownList = [
      { section_id: 1, section_name: 'اسعار الشحن الدولى' },
      { section_id: 2, section_name: 'الطلبات' },
      { section_id: 3, section_name: 'عروض الاسعار' },
      { section_id: 4, section_name: 'اراء العملاء' },
      { section_id: 5, section_name: ' الخدمات' },
      { section_id: 6, section_name: 'البانرات ' },
      { section_id: 7, section_name: 'الادمن ' },
      { section_id: 8, section_name: 'العملاء ' },
      { section_id: 9, section_name: ' البروموكود' },
      { section_id: 10, section_name: ' التحويلات' },

    ];
    this.selectedItems = [
      
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'section_id',
      textField: 'section_name',
      selectAllText: ' اختيار الكل',
      unSelectAllText: ' الغاء الاختيار',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {

    this.permissions.push(item)
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
    this.permissions = items
  }
  files: File[] = [];

onSelect(event) {
  console.log(event.addedFiles[0]);
  this.files=[]
  this.files.push(...event.addedFiles);
}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

  submit(){
    console.log('Form Work')
    this.spinner.show()
    let form={
      ...this.form.value,
      image:this.files[0],
      sections:this.permissions
    }
    this.service.addAdmin(form).subscribe((res:any)=>{
      console.log(res)
      this.spinner.hide()
      if(res.status == false){
        for (let i = 0; i < res.errors.length; i++) {
          this.toastr.error(res.errors[i]);  
          
        }

      }
      else{

        Swal.fire(
            'نجاح',
            'تم إضافة ادمن بنجاح',
            'success'
          ).then(()=>{
            this.router.navigate(['/app/admins/list'])
        
                })
      }
      // this.router.navigate(['/app/sizes/list'])
    })
  }

  Hi(){
    console.log('dsjbhfsdjhgdjshg')
  }

}
