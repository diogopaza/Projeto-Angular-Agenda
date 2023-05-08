import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent {

  public liveForm: FormGroup | undefined;

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    public fb: FormBuilder
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
  }
  
}
