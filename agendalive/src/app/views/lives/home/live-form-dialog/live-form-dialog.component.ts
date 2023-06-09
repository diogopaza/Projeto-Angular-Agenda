import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent { 

  public liveForm!: FormGroup;

  constructor(
    
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    public fb: FormBuilder,
    private rest: LiveService
    ){}

  ngOnInit(){
    this.liveForm = this.fb.group({
      liveName:['', [Validators.required]],
      channelName:['', [Validators.required]],
      liveLink:['', [Validators.required]],
      liveDate:['', [Validators.required]],
      liveTime:['', [Validators.required]]
    })
  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();   
  }

  createLive(){
    let newDate: moment.Moment = moment.utc(this.liveForm.value.liveDate).local();
    this.liveForm.value.liveDate = newDate.format("YYYY-MM-DD" + "T" + this.liveForm.value.liveTime);
    this.rest.postLives(this.liveForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.liveForm.reset();
    window.location.reload();
  }
  
}
