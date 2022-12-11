import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute, Router } from '@angular/router';
import { InstituteListService } from 'src/app/services/institute-list.service';


@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent implements OnInit {

  admissionForm:any;
  classDatas:any;
  responceData:any;
  errorMessage:any;
  instSlug:any;
  selectedUploadFile:any;
  selectedStuImage:any;
  marksdata:any;


  constructor(
    private fb: FormBuilder,
    private instListService: InstituteListService,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
   // update data
   this.activateRoute.paramMap.subscribe((param) => {
    this.instSlug = param.get('id');
    console.log('param', this.instSlug )
    // if (this.instSlug) {
    //   this.getInstiInfo(this.instSlug);
    // } 
  });

    this.admissionForm = this.fb.group({
      class_id: ['', Validators.required],
      admission_date: ['', Validators.required],
      institute_slug: [this.instSlug, Validators.required],
      student_name: ['', Validators.required],
      student_bn_name: ['', Validators.required],
      father_name: ['', Validators.required],
      father_email: ['', Validators.required],
      father_occupation: ['', Validators.required],
      guardian_phone_1: ['', Validators.required],
      mother_name: ['', Validators.required],
      mother_occupation: ['', Validators.required],
      guardian_phone_2: ['', Validators.required],
      birth_certificate_no: ['', Validators.required],
      birth_date: ['', Validators.required],
      nationality: ['', Validators.required],
      gender: ['', Validators.required],
      religion: ['', Validators.required],
      student_email: ['', Validators.required],
      student_phone: ['', Validators.required],
      // village: ['', Validators.required],
      student_photo: [],
      student_signature: [],
      
      present_address:null,
     
    });


 


    this.classData();

  }

  // image section 
onSignatureSelected(event:any) {

  this.selectedUploadFile = event.target.files[0]
  console.log(this.selectedUploadFile);

}
onPhotoSelected(event:any) {

  this.selectedStuImage = event.target.files[0]
  console.log(this.selectedStuImage);

}

  onSubmit(){

    const mydata = {
      ...this.admissionForm.value,
      ...{ present_address:{
          village : this.marksdata,
      }  },
    };

console.log('this.admissionForm.value',this.admissionForm.value);

    this.instListService.admissionPost(this.admissionForm.value).subscribe(
      (result) => {
        this.responceData = result;

        this.admissionForm.reset();
        this.toastr.success(result.message);
        this.errorMessage = null;
       
        // window.location.reload();
      },
      (err) => {
        this.errorMessage = err.error.errors;

        // if (err.error.errors.class_section_id) {
        //   this.toastr.error(err.error.errors.class_section_id);
        // }
        // if (err.error.errors.subject_id) {
        //   this.toastr.error(err.error.errors.subject_id);
        // }

        // if (err.error.errors.exam_id) {
        //   this.toastr.error(err.error.errors.exam_id);
        // }
      }
    );


  }




  getMartk($event: any) {
    this.marksdata =  $event.target.value;
    console.log(this.marksdata);
    // this.mmarks = $event.target.value;
    // console.log("first", this.mmarks )
  }



  // classs data
  classData() {
    this.instListService.classData().subscribe((result) => {
      this.classDatas = result;
      
      
    });
  }

}
