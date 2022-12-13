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
  styleUrls: ['./admission-form.component.scss'],
})
export class AdmissionFormComponent implements OnInit {
  admissionForm: any;
  classDatas: any;
  responceData: any;
  errorMessage: any;
  instSlug: any;
  selectedUploadFile: any;
  selectedStuImage: any;
  marksdata: any;
Date: any;

  constructor(
    private fb: FormBuilder,
    private instListService: InstituteListService,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // update data
    this.activateRoute.paramMap.subscribe((param) => {
      this.instSlug = param.get('id');
      console.log('param', this.instSlug);
      // if (this.instSlug) {
      //   this.getInstiInfo(this.instSlug);
      // }
    });

    this.admissionForm = this.fb.group({
      roll_no: [Date.now(), Validators.required],
      class_id: ['', Validators.required],
      admission_date: ['', Validators.required],
      version: ['', Validators.required],
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
      mother_email: ['', Validators.required],

      local_gaurdian_name: ['', Validators.required],
      local_gaurdian_occupation: ['', Validators.required],
      guardian_phone_3: ['', Validators.required],
      local_gaurdian_email: ['', Validators.required],

      birth_certificate_no: ['', Validators.required],
      birth_date: ['', Validators.required],
      nationality: ['', Validators.required],
      gender: ['', Validators.required],
      religion: ['', Validators.required],

      present_village: ['', Validators.required],
      present_union: ['', Validators.required],
      present_post_code: ['', Validators.required],
      present_thana: ['', Validators.required],
      present_zilla: ['', Validators.required],

      permanent_village: ['', Validators.required],
      permanent_union: ['', Validators.required],
      permanent_post_code: ['', Validators.required],
      permanent_thana: ['', Validators.required],
      permanent_zilla: ['', Validators.required],

      previous_institute_name: ['', Validators.required],
      previous_institute_address: ['', Validators.required],
      previous_institute_class: ['', Validators.required],
      institute_changing_reason: ['', Validators.required],

      public_exam_name: ['', Validators.required],
      public_exam_reg_no: ['', Validators.required],
      public_exam_roll_no: ['', Validators.required],
      public_exam_pass_year: ['', Validators.required],
      public_exam_pass_inst_name: ['', Validators.required],

      student_user_name: ['', Validators.required],
      student_email: ['', Validators.required],
      student_phone: ['', Validators.required],
      student_photo: [],
      student_signature: [],

      // present_address:,
    });

    this.classData();
  }

  // image section
  onSignatureSelected(event: any) {
    this.selectedUploadFile = event.target.files[0];
    console.log(this.selectedUploadFile);
  }
  onPhotoSelected(event: any) {
    this.selectedStuImage = event.target.files[0];
    console.log(this.selectedStuImage);
  }

  onSubmit() {
    // ---------------------------------------------------

    const stuFinalData = new FormData();

    stuFinalData.append('roll_no', this.admissionForm.get('roll_no').value);
    stuFinalData.append(
      'admission_date',
      this.admissionForm.get('admission_date').value
    );
    stuFinalData.append('class_id', this.admissionForm.get('class_id').value);
    stuFinalData.append('version', this.admissionForm.get('version').value);
    stuFinalData.append(
      'institute_slug',
      this.admissionForm.get('institute_slug').value
    );

    stuFinalData.append(
      'student_name',
      this.admissionForm.get('student_name').value
    );
    stuFinalData.append(
      'student_bn_name',
      this.admissionForm.get('student_bn_name').value
    );

    stuFinalData.append(
      'father_name',
      this.admissionForm.get('father_name').value
    );
    stuFinalData.append(
      'father_email',
      this.admissionForm.get('father_email').value
    );
    stuFinalData.append(
      'father_occupation',
      this.admissionForm.get('father_occupation').value
    );
    stuFinalData.append(
      'guardian_phone_1',
      this.admissionForm.get('guardian_phone_1').value
    );

    stuFinalData.append(
      'mother_name',
      this.admissionForm.get('mother_name').value
    );
    stuFinalData.append(
      'mother_occupation',
      this.admissionForm.get('mother_occupation').value
    );
    stuFinalData.append(
      'guardian_phone_2',
      this.admissionForm.get('guardian_phone_2').value
    );
    stuFinalData.append(
      'mother_email',
      this.admissionForm.get('mother_email').value
    );

    stuFinalData.append(
      'local_gaurdian_name',
      this.admissionForm.get('local_gaurdian_name').value
    );
    stuFinalData.append(
      'local_gaurdian_occupation',
      this.admissionForm.get('local_gaurdian_occupation').value
    );
    stuFinalData.append(
      'guardian_phone_3',
      this.admissionForm.get('guardian_phone_3').value
    );
    stuFinalData.append(
      'local_gaurdian_email',
      this.admissionForm.get('local_gaurdian_email').value
    );

    stuFinalData.append(
      'birth_certificate_no',
      this.admissionForm.get('birth_certificate_no').value
    );
    stuFinalData.append(
      'birth_date',
      this.admissionForm.get('birth_date').value
    );
    stuFinalData.append(
      'nationality',
      this.admissionForm.get('nationality').value
    );
    stuFinalData.append('gender', this.admissionForm.get('gender').value);
    stuFinalData.append('religion', this.admissionForm.get('religion').value);

    stuFinalData.append(
      'present_village',
      this.admissionForm.get('present_village').value
    );
    stuFinalData.append(
      'present_union',
      this.admissionForm.get('present_union').value
    );
    stuFinalData.append(
      'present_post_code',
      this.admissionForm.get('present_post_code').value
    );
    stuFinalData.append(
      'present_thana',
      this.admissionForm.get('present_thana').value
    );
    stuFinalData.append(
      'present_zilla',
      this.admissionForm.get('present_zilla').value
    );

    stuFinalData.append(
      'permanent_village',
      this.admissionForm.get('permanent_village').value
    );
    stuFinalData.append(
      'permanent_union',
      this.admissionForm.get('permanent_union').value
    );
    stuFinalData.append(
      'permanent_post_code',
      this.admissionForm.get('permanent_post_code').value
    );
    stuFinalData.append(
      'permanent_thana',
      this.admissionForm.get('permanent_thana').value
    );
    stuFinalData.append(
      'permanent_zilla',
      this.admissionForm.get('permanent_zilla').value
    );

    stuFinalData.append(
      'previous_institute_name',
      this.admissionForm.get('previous_institute_name').value
    );
    stuFinalData.append(
      'previous_institute_address',
      this.admissionForm.get('previous_institute_address').value
    );
    stuFinalData.append(
      'previous_institute_class',
      this.admissionForm.get('previous_institute_class').value
    );
    stuFinalData.append(
      'institute_changing_reason',
      this.admissionForm.get('institute_changing_reason').value
    );

    stuFinalData.append(
      'public_exam_name',
      this.admissionForm.get('public_exam_name').value
    );
    stuFinalData.append(
      'public_exam_reg_no',
      this.admissionForm.get('public_exam_reg_no').value
    );
    stuFinalData.append(
      'public_exam_roll_no',
      this.admissionForm.get('public_exam_roll_no').value
    );
    stuFinalData.append(
      'public_exam_pass_year',
      this.admissionForm.get('public_exam_pass_year').value
    );
    stuFinalData.append(
      'public_exam_pass_inst_name',
      this.admissionForm.get('public_exam_pass_inst_name').value
    );

    stuFinalData.append(
      'student_user_name',
      this.admissionForm.get('student_user_name').value
    );
    stuFinalData.append(
      'student_email',
      this.admissionForm.get('student_email').value
    );
    stuFinalData.append('student_phone', this.admissionForm.get('student_phone').value);

    if (this.selectedUploadFile) {
      stuFinalData.append('student_signature', this.selectedUploadFile);
    }
    if (this.selectedStuImage) {
      stuFinalData.append('student_photo', this.selectedStuImage);
    }

    console.log('this.admissionForm.value', this.admissionForm.value);
    console.log('stuFinalData', stuFinalData);

    this.instListService.admissionPost(stuFinalData).subscribe(
      (result) => {
        this.responceData = result;

        this.admissionForm.reset();
        this.toastr.success(result.message);
        this.errorMessage = null;
        // this.selectedStuImage=null;
        // this.selectedUploadFile=null;

        // this.admissionForm.resetForm();

        // window.location.reload();
      },
      (err) => {
        this.errorMessage = err?.error?.errors;

     
        if (this.errorMessage.birth_certificate_no) {
          this.toastr.error(this.errorMessage.birth_certificate_no);
        }
        if (this.errorMessage.birth_date) {
          this.toastr.error(this.errorMessage.birth_date);
        }

        if (this.errorMessage.class_id) {
          this.toastr.error(this.errorMessage.class_id);
        }
        if (this.errorMessage.father_name) {
          this.toastr.error(this.errorMessage.father_name);
        }
        if (this.errorMessage.father_occupation) {
          this.toastr.error(this.errorMessage.father_occupation);
        }


        if (this.errorMessage.guardian_phone_1) {
          this.toastr.error(this.errorMessage.guardian_phone_1);
        }
        if (this.errorMessage.guardian_phone_2) {
          this.toastr.error(this.errorMessage.guardian_phone_2);
        }

                if (this.errorMessage.guardian_phone_3) {
          this.toastr.error(this.errorMessage.guardian_phone_3);
        }
        if (this.errorMessage.local_gaurdian_name) {
          this.toastr.error(this.errorMessage.local_gaurdian_name);
        }
        if (this.errorMessage.local_gaurdian_occupation) {
          this.toastr.error(this.errorMessage.local_gaurdian_occupation);
        }



        if (this.errorMessage.mother_name) {
          this.toastr.error(this.errorMessage.mother_name);
        }
        if (this.errorMessage.mother_occupation) {
          this.toastr.error(this.errorMessage.mother_occupation);
        }
        if (this.errorMessage.nationality) {
          this.toastr.error(this.errorMessage.nationality);
        }
        if (this.errorMessage.permanent_post_code) {
          this.toastr.error(this.errorMessage.permanent_post_code);
        }
        if (this.errorMessage.permanent_thana) {
          this.toastr.error(this.errorMessage.permanent_thana);
        }


        if (this.errorMessage.permanent_union) {
          this.toastr.error(this.errorMessage.permanent_union);
        }
        if (this.errorMessage.permanent_village) {
          this.toastr.error(this.errorMessage.permanent_village);
        }
        if (this.errorMessage.permanent_zilla) {
          this.toastr.error(this.errorMessage.permanent_zilla);
        }
        if (this.errorMessage.present_post_code) {
          this.toastr.error(this.errorMessage.present_post_code);
        }
        if (this.errorMessage.present_thana) {
          this.toastr.error(this.errorMessage.present_thana);
        }



        if (this.errorMessage.present_union) {
          this.toastr.error(this.errorMessage.present_union);
        }
        if (this.errorMessage.present_village) {
          this.toastr.error(this.errorMessage.present_village);
        }
        if (this.errorMessage.present_zilla) {
          this.toastr.error(this.errorMessage.present_zilla);
        }
        if (this.errorMessage.student_bn_name) {
          this.toastr.error(this.errorMessage.student_bn_name);
        }
        if (this.errorMessage.student_email) {
          this.toastr.error(this.errorMessage.student_email);
        }

        if (this.errorMessage.student_name) {
          this.toastr.error(this.errorMessage.student_name);
        }
        if (this.errorMessage.student_phone) {
          this.toastr.error(this.errorMessage.student_phone);
        }
        if (this.errorMessage.student_photo) {
          this.toastr.error(this.errorMessage.student_photo);
        }
        if (this.errorMessage.student_signature) {
          this.toastr.error(this.errorMessage.student_signature);
        }
        if (this.errorMessage.version) {
          this.toastr.error(this.errorMessage.version);
        }
      }
    );
  }

  // getMartk($event: any) {
  //   this.marksdata =  $event.target.value;
  //   console.log(this.marksdata);
  //   // this.mmarks = $event.target.value;
  //   // console.log("first", this.mmarks )
  // }

  // classs data
  classData() {
    this.instListService.classData().subscribe((result) => {
      this.classDatas = result;
    });
  }
}
