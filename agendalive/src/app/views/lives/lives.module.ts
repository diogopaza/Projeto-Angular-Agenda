import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { LiveFormDialogComponent } from './home/live-form-dialog/live-form-dialog.component';
import { LiveListComponent } from './home/live-list/live-list.component';
import { LocalDateTimePipe } from 'src/app/shared/pipe/local-date-time.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    LiveListComponent,
    LiveFormDialogComponent,
    LocalDateTimePipe
  ],
  imports: [
    CommonModule,
    LivesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatProgressBarModule
  ],
  providers: [LocalDateTimePipe]
})
export class LivesModule { }
